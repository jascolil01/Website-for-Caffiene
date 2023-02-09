const mongoose = require('mongoose')

require('dotenv').config()

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log('Started brewing the coffee')
})
.catch(e=>{
  console.log('Connection error', e.message)
})

const db = mongoose.connection

module.exports=db