// Imports
// import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { firstname, lastname, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = password
    // const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      firstname,
      lastname,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    throw new Error(`User not registered!!`)
  } else {
    const userDetails = user.get()
    // User exists
    let passwordMatch = false;
    // const passwordMatch = await bcrypt.compare(password, userDetails.password)
    if (password === userDetails.password){
      passwordMatch = true
    }

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Invalid User Credentials!!`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        firstname: userDetails.firstname,
        lastname: userDetails.lastname,
        email: userDetails.email,
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}
