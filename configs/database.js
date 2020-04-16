const Sequelize = require('sequelize')

const sequelize = new Sequelize('fake-instagram', 'rootInta', '', {
    host:'localhost',
    port:3000,
    dialect:'mysql'
  })
  

module.exports = sequelize