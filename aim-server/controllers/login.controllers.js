const db = require('../db')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const login = (req, res, next) => {
  const { email, password } = req.body
  db.query(`SELECT * FROM ACCOUNT WHERE EMAIL = $1 AND USER_PASSWORD = $2;`, [email, password], (err, result) => {
    if (err) {
      return next(err)
    }
    if (result.rows.length > 0) {
      const id = result.rows[0]["user_id"]
      const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: 7200,
      })
      return res.status(200).json({
        auth: true,
        token: token,
        result: result.rows[0]
      })
    }
    else {
      return res.status(401).json({
        auth: false,
        message: "Email and password don't match"
      })
    }
  })
}

module.exports = {
  login
}
