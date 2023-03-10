const mongoose = require('mongoose')
const Schema = mongoose.Schema




const Drink = new Schema(
  {
    name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        typeOfCaffeine:{ type: String, required: true },
        caffeineLevel: { type: String, required: true },
        levelOfEffectiveness:{ type: String, required: true },

  },
  {timestamps:true}
)

module.exports= mongoose.model('Drink', Drink)