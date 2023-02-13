const db = require('../db')
const Drink = require('../models/drinks')

db.on('error', console.error.bind(console, 'Connection to MongoDB failed:'))

const main = async ()=>{
  const drinks =[
    {name:"Coffee",description:"Can be made hot or cold, usually made also with sugar and dairy in it",image:'https://thumbs.dreamstime.com/b/coffee-pot-18213208.jpg', typeOfCaffiene:"Coffee", caffieneLevel:"80-100 mg/cup", levelOfEffectiveness:"3"},
    {name:"Cold Brew", description:"This is made by seeping coffee in cold water for around 20-24 hours, this tends to be strong than your average coffee", image:'https://previews.123rf.com/images/thepiwko/thepiwko1808/thepiwko180800082/107747840-cold-brew-coffee.jpg', typeOfCaffiene:"Coffee", caffieneLevel:" about 200 mg", levelOfEffectiveness:"4"},
    {name:"Nitro Coldbrew", description:"This is not for the average coffee drinker, this cold brew is infused with nitrogen to give you a real jump start to your day!", image:'https://www.clipartmax.com/png/middle/252-2528787_nitro-coffee-nitro-cold-brew-coffee.png', typeOfCaffiene:"Coffee", caffieneLevel:"about 280 mg" , levelOfEffectiveness:"5"},
    {name:"French Press", description:"This is made with a french press apparatus, you put coffee beans in it and pour hot water into it. After it seeps for about 5-10 minutes you press down the plunger and enjoy!", image:'https://thumbs.dreamstime.com/z/french-press-coffee-maker-white-background-44549599.jpg', typeOfCaffiene:"Coffee", caffieneLevel:"About 100mg", levelOfEffectiveness:"2"},
    {name:"Pour Over", description:"Pour overs take patiences to make but can be well worth it when done right", image:'https://thumbs.dreamstime.com/b/freshly-prepared-black-coffee-chemex-pour-over-coffee-maker-near-white-coffee-cup-alternative-ways-brewing-coffee-d-159963041.jpg', typeOfCaffiene:"Coffee", caffieneLevel:"About 100mg" , levelOfEffectiveness:"3"},

    {name:"Latte",description:"Made with espresso, steamed milk and has foam at the top!",image:'https://media.gettyimages.com/id/645372861/photo/latte-art-faces-in-cups-of-coffee.jpg?s=612x612&w=gi&k=20&c=SGlvJkjJwikAqPgM5fWZtjXicCKApDgdoovwmk-xXq0=', typeOfCaffiene:"Espresso", caffieneLevel:"173 mg/cup", levelOfEffectiveness:"3"},
    {name:"Espresso", description:"Made mostly with steamed milk and a the caffiene for this is espresso, usually on the higher side for caffiene", image:'https://img.freepik.com/premium-photo/coffee-cup-latte-art-mock-up-put-design-with-mugs-isolate-white-background-mock-up-idea_50179-3470.jpg?w=2000', typeOfCaffiene:"Espresso", caffieneLevel:" about 173 mg", levelOfEffectiveness:4},
    {name:"Macchiato", description:"Made just like a latte but has more foam at the top and the shots of espresso are pour lasted into the drink", image:'https://thumbs.dreamstime.com/b/latte-macchiato-coffee-glass-hot-close-up-80882102.jpg', typeOfCaffiene:"Espresso", caffieneLevel:"About 100 mg" , levelOfEffectiveness:"3"},
    {name:"Cappucino", description:"These are also made like a latte but the majority of the drink is foam", image:'https://previews.123rf.com/images/ogonkova/ogonkova1203/ogonkova120300048/12747804-cup-of-cappuccino-with-heart-symbol-coffee.jpg', typeOfCaffiene:"Espresso", caffieneLevel:"About 170mg", levelOfEffectiveness:"2"},
    {name:"Americano", description:"This drink is made with espresso and water", image:'https://thumbs.dreamstime.com/b/closeup-glass-americano-hot-coffee-isolated-white-background-145865072.jpg', typeOfCaffiene:"Espresso", caffieneLevel:"150mg" , levelOfEffectiveness:1}
  ]

  await Drink.insertMany(drinks)
  console.log("Drinks added")
}
const run = async () =>{
  await main()
db.close()
}

run()