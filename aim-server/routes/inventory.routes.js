const express = require('express')
const inventoryControllers = require('../controllers/inventory.controllers')
const router = express.Router()

router.get('/all', inventoryControllers.getAllInventories)
router.get('/:id', inventoryControllers.getInventoryDetail)
router.post('/bulk', inventoryControllers.createInventoryBulk)

module.exports = router
