const squelize = require('../configs/database')
const bcrypt = require('bcrypt')

const IndexController = {
    store: async(req,res) => {
        const {name, email, username, password} = req.body
        console.log(req.body)
        const pwd = bcrypt.hashSync(password,10)
        let result = await squelize.query(`INSERT INTO users (name,email,username,password) VALUES (${name},${email}, ${username}. ${pwd}, ${avatar})`, {
            type:Sequelize.QueryTypes.INSERT
        })
        console.log(result)
    }
}

module.exports = IndexController