const db = require('../db')
const DrinkType = require('../models/drink')

db.on('error', console.error.bind(console, 'Connection to MongoDB failed:'))

const main = async ()=>{
  const drinkType =[
    {name:"Coffee",description:"Can be made hot or cold, usually made also with sugar and dairy in it",image:'https://thumbs.dreamstime.com/b/coffee-pot-18213208.jpg', typeOfCaffiene:"Coffee bean", caffieneLevel:"80-100 mg/cup", levelOfEffectiveness:3},
    {name:"Espresso", description:"Made mostly with steamed milk and a the caffiene for this is espresso, usually on the higher side for caffiene", image:'https://img.freepik.com/premium-photo/coffee-cup-latte-art-mock-up-put-design-with-mugs-isolate-white-background-mock-up-idea_50179-3470.jpg?w=2000', typeOfCaffiene:"Espresso", caffieneLevel:" about 173 mg", levelOfEffectiveness:4},
    {name:"Energy Drinks", description:"Energy drinks are probably amongst the highest in caffiene you will find, it is not the best for you health wise but can give you that extra boost when needed", image:'https://static6.depositphotos.com/1000128/561/i/600/depositphotos_5612016-stock-photo-energy-drinks-in-metal-cans.jpg', typeOfCaffiene:"Energy Drink", caffieneLevel:"150-200 mg" , levelOfEffectiveness:5},
    {name:"Tea", description:"A more natural form of caffiene, tea will normally relax you with its subtle hints of whatever is in it", image:'https://thumbs.dreamstime.com/b/hot-tea-teapot-cup-teacup-full-steaming-rustic-wood-background-58824894.jpg', typeOfCaffiene:"Tea", caffieneLevel:"About 50mg", levelOfEffectiveness:2},
    {name:"Soda", description:"Soda suprisingly has caffiene in it, most of them do not have more caffiene in it then tea would but it interesting to know that there is some caffiene in it", image:'https://static.vecteezy.com/system/resources/thumbnails/001/268/671/small_2x/soda-can-isolated.jpg', typeOfCaffiene:"Soda", caffieneLevel:"30-40mg" , levelOfEffectiveness:1}
  ]

  await DrinkType.insertMany(drinkType)
  console.log("Drinks genre added")
}
const run = async () =>{
  await main()
db.close()
}

run()