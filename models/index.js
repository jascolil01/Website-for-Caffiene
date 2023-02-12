const mongoose = require('mongoose')
const drinkSchema = require('./drinks')

const Drink = mongoose.model('drink', drinkSchema)

module.exports = {
  Drink
}