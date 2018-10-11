// Imports
import jwt from 'jsonwebtoken'
import serverConfig from '../config/server.json'

// Authentication middleware
export default function (request, response, next) {
  // console.log("called JWT Verification " + request)
  let authToken = request.headers.authorization
  console.log("Token" + request.body);

  if (authToken && authToken !== null) {
    try {
      const token = authToken.split(' ')
      request.user = jwt.verify(token[1], serverConfig.secret)
    } catch (e) {
      console.warn('Invalid token detected.')
      throw new Error(`User not registered!!`)
    }
  } else {
    request.user = {}
  }

  next()
}
