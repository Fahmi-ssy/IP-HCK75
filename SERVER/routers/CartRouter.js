const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const CartController = require("../Controllers/CartController");
const CartRouter = require("express").Router();

CartRouter.use(authentication);
CartRouter.use(authorization);

CartRouter.post("/", CartController.createCartItem);
CartRouter.get("/:userId", CartController.getCartItems);

module.exports = CartRouter;