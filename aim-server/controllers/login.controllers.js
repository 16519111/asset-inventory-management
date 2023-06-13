const db = require('../db')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const login = (req, res, next) => {
  const { username, password } = req.body

  db.connection.query(`SELECT * FROM users WHERE username = ? AND password = ?;`, [username, password], (err, result) => {
    if (err) {
      return next(err)
    }
    if (result.length > 0) {
      const id = result[0].username
      const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: 7200,
      })
      return res.status(200).json({
        auth: true,
        token: token,
        result: result[0]
      })
    }
    else {
      return res.status(401).json({
        auth: false,
        message: "Username and password don't match"
      })
    }
  })
}

module.exports = {
  login
}
