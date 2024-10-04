'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: 'user_id' // Specify the foreign key for User association
      });
      Cart.belongsTo(models.Inventory, {
        foreignKey: 'product_id' // Specify the foreign key for Inventory association
      });
    }
  }

  Cart.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'User is required'
        },
        notNull: {
          msg: 'User is required'
        }
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Product is required'
        },
        notNull: {
          msg: 'Product is required'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Quantity is required'
        },
        notNull: {
          msg: 'Quantity is required'
        }
      }
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Total price is required'
        },
        notNull: {
          msg: 'Total price is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });

  return Cart;
};
