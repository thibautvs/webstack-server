'use strict';

module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define('Product', {
    name: DataTypes.TEXT,
    price: DataTypes.DECIMAL
  }, {
    tableName: 'Products'
    //,timestamps: false (no createdAt and updatedAt columns)
  });

  return Product;
};
