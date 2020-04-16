const Sequelize = require('sequelize')
const config = require('../configs/database')

const IndexController = {
    index: async(req,res) => {
        let result = await conexao.query('select * from categoria', {
            type:Sequelize.QueryTypes.SELECT
        })
        console.log(result)
    }
}

module.exports = IndexController