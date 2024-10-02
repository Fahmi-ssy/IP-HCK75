const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const CartController = require("../Controllers/CartController");
const CartRouter = require("express").Router();
CartRouter.use(authentication);
CartRouter.use(authorization);
CartRouter.get("/", CartController.createCartItem);

module.exports = CartRouter;