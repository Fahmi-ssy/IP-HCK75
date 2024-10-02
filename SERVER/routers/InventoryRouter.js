const authorization = require('../middleware/authorization')
const express = require('express')
const InventoryController = require('../Controllers/InventoryController')
const authentication = require('../middleware/authentication')
const routerInventory = express.Router()


routerInventory.get('/',InventoryController.getAllInventory)
routerInventory.use(authentication)
routerInventory.post('/',authorization,InventoryController.createInventory)
// routerInventory.get('/:id',InventoryController.getInventoryById)
routerInventory.put('/:id',authorization,InventoryController.updateInventory)
routerInventory.delete('/:id',authorization,InventoryController.deleteInventory)

module.exports = routerInventory