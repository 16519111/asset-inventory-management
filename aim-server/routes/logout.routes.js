const express = require('express')
const logoutControllers = require('../controllers/logout.controllers')
const router = express.Router()

router.post('/', logoutControllers.logout)

module.exports = router
