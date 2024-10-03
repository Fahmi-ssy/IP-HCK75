const {Inventory} = require("../models");
const { Op } = require('sequelize');

class InventoryController{

    static async getAllInventory(req, res, next) {
        try {
            const { filter,  sort ,page } = req.query;
            const paramsQuerySql = {}
            if (filter) {
                paramsQuerySql.category = filter
            }
            if (sort) {
                const ordering = sort[0] === '-' ? 'DESC' : 'ASC'
                const columns = ordering === 'DESC' ? ['price', 'DESC'] : ['price', 'ASC']
                paramsQuerySql.order = [[columns[0], ordering]]
            }

            let limit = 10
            let  pageNumber =  1

            if(page){
                if(page.size){
                    limit = +page.size
                    paramsQuerySql.limit = limit                    
                }
                if(page.number){
                    pageNumber = +page.number
                    paramsQuerySql.offset = limit * (pageNumber - 1)
                }
            }
            const { counts, rows } = await Inventory.findAndCountAll(paramsQuerySql)
            // console.log(inventories);
            

            res.status(200).json({
                message: 'Success get all inventory',
                data: rows,
                totalData: counts,
                totalPage: Math.ceil(counts / limit),
                currentPage: limit
                
            });
        } catch (error) {
            next(error);
        }
    }
    static async createInventory(req,res,next){
        try {
            
            console.log(req.body);
            
            const {title,price,description,category,image,rating,user_id} = req.body
            
            const inventory = await Inventory.create({title,price,description,category,image,rating,user_id})
            res.status(201).json({
                message: 'Success create inventory',
                inventory
            })
            

        } catch (error) {
            
            console.log(error);
            
            // next(error)
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

