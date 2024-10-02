const {Inventory} = require("../models");

class InventoryController{

    static async getAllInventory(req, res, next) {
        try {
            
            const inventories = await Inventory.findAll()
            console.log(inventories);
            

            res.status(200).json({
                message: 'Success get all inventories',
                inventories
            });
        } catch (error) {
            next(error);
        }
    }
    static async createInventory(req,res,next){
        try {
            const {title,price,description,category,image,rating} = req.body
            const inventory = await Inventory.create({title,price,description,category,image,rating})
            res.status(201).json({
                message: 'Success create inventory',
                inventory
            })

        } catch (error) {
            next(error)
        }
    }
    static async getInventoryById(req,res,next){
        try {
            const {id} = req.params
            const inventory = await Inventory.findByPk(id)
            res.status(200).json({
                message: 'Success get inventory by id',
                inventory
            })
        } catch (error) {
            next(error)
        }
    }
    static async updateInventory(req,res,next){
        try {
            const {id} = req.params
            const {title,price,description,category,image,rating} = req.body
            const inventory = await Inventory.update({title,price,description,category,image,rating},{
                where:{
                    id
                }
            })
            res.status(200).json({
                message: 'Success update inventory',
                inventory
            })
        } catch (error) {
            next(error)
        }
    }static async deleteInventory(req,res,next){
        try {
            const {id} = req.params
            const inventory = await Inventory.destroy({
                where:{
                    id
                }
            })
            res.status(200).json({
                message: 'Success delete inventory',
                inventory
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = InventoryController

