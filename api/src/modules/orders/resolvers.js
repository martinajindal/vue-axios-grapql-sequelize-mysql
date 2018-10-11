// Imports
// import bcrypt from 'bcrypt'

// App Imports
import models from '../../setup/models'

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.Order.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  console.log("Get All Call Received")
  return await models.Order.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.Order.destroy({ where: { id } })
}

