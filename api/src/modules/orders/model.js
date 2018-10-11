'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER, primaryKey: true 
    },
    matterRef: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    }
  })
  // User.associate = function(models) {
  //   User.hasMany(models.Subscription)
  // }
  return Order
}

