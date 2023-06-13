const db = require('../db')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const logout = (req, res, next) => {
  const token = jwt.sign("invalidate", process.env.JWT_INVALIDATE)
  return res.status(200).json({
    message: "Successfully logged out"
  })
}

module.exports = {
  logout
}
