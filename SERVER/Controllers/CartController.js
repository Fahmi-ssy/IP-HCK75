const {Cart, Inventory} = require('../models');

class CartController{
    static async createCartItem(req, res, next) {
        try {
            const { user_id, product_id, quantity, total_price } = req.body;
            const newCartItem = await Cart.create({ user_id, product_id, quantity, total_price });
            res.status(201).json(newCartItem);
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static async getCartItems(req, res, next) {
        try {
            const userId = req.params.userId;
            const cartItems = await Cart.findAll({
                where: { user_id: userId },
                include: [Inventory] 
            });
            res.status(200).json(cartItems);
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    static async updateCartItem(req, res, next) {
        try {
            const cartItemId = req.params.id;
            const { quantity, total_price } = req.body;
            const updatedCartItem = await Cart.update(
                { quantity, total_price },
                { where: { id: cartItemId }, returning: true }
            );
            res.status(200).json(updatedCartItem[1][0]);
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: error.message });
        }
    }
    
}

module.exports = CartController