'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    }
  })
  // User.associate = function(models) {
  //   User.hasMany(models.Subscription)
  // }
  return User
}

// // UserAccount
// module.exports = function (sequelize, DataTypes) {
//   let UserAccount = sequelize.define('userAccount', {
//     firstname: {
//       type: DataTypes.STRING
//     },
//     lastname: {
//       type: DataTypes.STRING
//     },
//     email: {
//       type: DataTypes.TEXT
//     },
//     password: {
//       type: DataTypes.TEXT
//     }
//   })
//   return UserAccount
// }