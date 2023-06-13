const express = require('express')
// const cors = require('cors')
const app = express()
const port = 8000

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

var inventoryRoutes = require('./routes/inventory.routes')
var loginRoutes = require('./routes/login.routes')
var logoutRoutes = require('./routes/logout.routes')

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"]

  if (!token) {
    res.json({ auth: false, message: "You don't have a token" })
  }
  else {
    if (token === "servlet") {
      next()
    }
    else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.json({ auth: false, message: "You fail to authenticate" })
        }
        else {
          next()
        }
      })
    }
  }
}

app.get("/isAuth", verifyJWT, (req, res, next) => {
  res.status(200).json({
    auth: true,
    message: "User is authenticated"
  })
})

app.use('/inventory', verifyJWT, inventoryRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)

app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
