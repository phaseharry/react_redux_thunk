const Sequelize = require('sequelize')
const connection = new Sequelize(process.env.DATABASE_URL)
const faker = require('faker')

const Product = connection.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER
    }
})

const syncAndSeed = () => {
    connection.sync({force: true})
    .then(() => {
        Promise.all([
            Product.create({ name : faker.commerce.productName(), rating: 6}),
            Product.create({ name : faker.commerce.productName(), rating: 9}),
            Product.create({ name : faker.commerce.productName(), rating: 4}),
            Product.create({ name : faker.commerce.productName(), rating: 10}),
            Product.create({ name : faker.commerce.productName(), rating: 6})
        ]).then(() => console.log('synced and seeded (HOPEFULLY!)'))
    }).catch((error) => console.log(error))
}

module.exports = {
    models : {
        Product
    },
    syncAndSeed
}