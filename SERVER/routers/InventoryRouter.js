const authorization = require('../middleware/authorization')
const express = require('express')
const InventoryController = require('../Controllers/InventoryController')
const routerInventory = express.Router()


routerInventory.get('/',InventoryController.getAllInventory)
// routerInventory.post('/',authorization,InventoryController.createInventory)
// routerInventory.get('/:id',InventoryController.getInventoryById)
// routerInventory.put('/:id',authorization,InventoryController.updateInventory)

module.exports = routerInventory