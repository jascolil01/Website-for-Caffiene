const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    drinkId:{type:String,required:true},
    name: { type: String, required: true },
      comment:{ type: String, required: true }
  },
  {timestamps:true}
)

module.exports= mongoose.model('Comment', Comment)