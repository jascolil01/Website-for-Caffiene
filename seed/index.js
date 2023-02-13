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
    {name:"Espresso", description:"Made mostly with steamed milk and a the caffiene for this is espresso, usually on the higher side for caffiene", image:'https://img.freepik.com/premium-photo/coffee-cup-latte-art-mock-up-put-design-with-mugs-isolate-white-background-mock-up-idea_50179-3470.jpg?w=2000', typeOfCaffiene:"Espresso", caffieneLevel:" about 173 mg", levelOfEffectiveness:"4"},
    {name:"Macchiato", description:"Made just like a latte but has more foam at the top and the shots of espresso are pour lasted into the drink", image:'https://thumbs.dreamstime.com/b/latte-macchiato-coffee-glass-hot-close-up-80882102.jpg', typeOfCaffiene:"Espresso", caffieneLevel:"About 100 mg" , levelOfEffectiveness:"3"},
    {name:"Cappucino", description:"These are also made like a latte but the majority of the drink is foam", image:'https://previews.123rf.com/images/ogonkova/ogonkova1203/ogonkova120300048/12747804-cup-of-cappuccino-with-heart-symbol-coffee.jpg', typeOfCaffiene:"Espresso", caffieneLevel:"About 170mg", levelOfEffectiveness:"2"},
    {name:"Americano", description:"This drink is made with espresso and water", image:'https://thumbs.dreamstime.com/b/closeup-glass-americano-hot-coffee-isolated-white-background-145865072.jpg', typeOfCaffiene:"Espresso", caffieneLevel:"150mg" , levelOfEffectiveness:"1"},

    {name:"Monster",description:"One of the more iconic energy drinks, comes in a variety of flavors and styles",image:'https://st3.depositphotos.com/12266308/18344/i/1600/depositphotos_183446950-stock-photo-bratislava-slovakia-february-2018-monster.jpg', typeOfCaffiene:"Energy Drink", caffieneLevel:"160 mg", levelOfEffectiveness:"4"},
    {name:"Red Bull", description:"One of the more iconic energy drinks, comes in a variety of flavors and styles", image:'https://thumbs.dreamstime.com/b/choosing-red-bull-energy-drink-20956344.jpg', typeOfCaffiene:"Energy Drink", caffieneLevel:"80 mg", levelOfEffectiveness:"4"},
    {name:"Rockstar", description:"Comes in a variety of flavors", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdmkAczKebOhqbVJWiL7VavE7baivCIOe7g&usqp=CAU', typeOfCaffiene:"Energy Drink", caffieneLevel:"About 160 mg" , levelOfEffectiveness:"4"},
    {name:"NOS", description:"Fun Fact, this company is the first company to be a automotive companyto release an energy drink", image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/8-7-08_-_NOS%21_%282753598084%29.jpg/220px-8-7-08_-_NOS%21_%282753598084%29.jpg', typeOfCaffiene:"Energy Drink", caffieneLevel:"About 160mg", levelOfEffectiveness:"4"},
    {name:"Venom", description:"This drink is pretty unique, isn't sold in alot of places but has the same amount of caffiene as everything eles on the list", image:'https://thumbs.dreamstime.com/b/closeup-glass-americano-hot-coffee-isolated-white-background-145865072.jpg', typeOfCaffiene:"Energy Drink", caffieneLevel:"160mg" , levelOfEffectiveness:"4"},

    {name:"Black Tea",description:"Pretty common for tea, it is said to promote heart health!",image:'https://thumbs.dreamstime.com/b/black-tea-isolated-white-background-40622400.jpg', typeOfCaffiene:"Tea", caffieneLevel:"47mg", levelOfEffectiveness:"2"},
    {name:"Green Tea", description:"Fun Fact, may improve brain function", image:'https://thumbs.dreamstime.com/z/green-tea-mug-teapot-wood-table-70258987.jpg', typeOfCaffiene:"Tea", caffieneLevel:"47mg", levelOfEffectiveness:"2"},
    {name:"White Tea", description:"May help wiht weight loss!!", image:'https://thumbs.dreamstime.com/b/serving-white-tea-9389070.jpg', typeOfCaffiene:"Tea", caffieneLevel:"47mg" , levelOfEffectiveness:"2"},
    {name:"Oolong Tea", description:"Oolong tea is produced mainly in China and Taiwan and is only partially oxidized. This type of tea can range from tasting similar to a fresh green tea, The flavor can vary widely, depending on where the tea leaves are grown and how the tea is made", image:'https://thumbs.dreamstime.com/b/oolong-tea-cup-accessories-38931010.jpg', typeOfCaffiene:"Tea", caffieneLevel:"47mg", levelOfEffectiveness:"2"},
    {name:"Herbal Tea", description:"Herbal tea is simply the combination of boiling water and botanicals like fruits, flowers, barks, herbs, mints, spices, roots, berries and seeds", image:'https://media.istockphoto.com/id/1166609941/photo/herbal-teas.jpg?s=1024x1024&w=is&k=20&c=nRiOpIbG26DVz-Upr8iINjwjrJKlYPTjL1nxJoD7Jb8=', typeOfCaffiene:"Tea", caffieneLevel:"47mg" , levelOfEffectiveness:"2"},

    {name:"Mountain Dew",description:"Mountain is a pretty famous soda",image:'https://thumbs.dreamstime.com/b/london-uk-june-bottle-mountain-dew-drink-ice-isolated-white-mountain-dew-citrus-flavored-soft-drink-produced-background-94138888.jpg', typeOfCaffiene:"Soda", caffieneLevel:"55mg", levelOfEffectiveness:"1"},
    {name:"Coca-Cola", description:"Has trace amounts of soda", image:'https://thumbs.dreamstime.com/b/wet-can-coca-cola-24193085.jpg', typeOfCaffiene:"Soda", caffieneLevel:"8.5mg", levelOfEffectiveness:"1"},
    {name:"Pepsi", description:"One of the most recognizable brands", image:'https://thumbs.dreamstime.com/b/pepsi-can-white-background-chisinau-moldova-november-pepsi-can-white-background-pepsi-carbonated-soft-drink-produced-131299337.jpg', typeOfCaffiene:"Soda", caffieneLevel:"10mg" , levelOfEffectiveness:"1"},
    {name:"Dr.Pepper", description:"This soda is very hit or miss with people, you either love it or hate it", image:'https://c8.alamy.com/comp/EJ9Y36/samara-russia-october-22th-2014-product-shot-of-dr-pepper-can-isolated-EJ9Y36.jpg', typeOfCaffiene:"Soda", caffieneLevel:"12mg", levelOfEffectiveness:"1"},
    {name:"Sun Drop", description:"Very small amount of caffiene", image:'https://target.scene7.com/is/image/Target/GUEST_03b722fb-508e-460a-9767-c6320cb845fd?wid=488&hei=488&fmt=pjpeg', typeOfCaffiene:"Soda", caffieneLevel:"5mg" , levelOfEffectiveness:"2"},
  ]

  await Drink.insertMany(drinks)
  console.log("Drinks added")
}
const run = async () =>{
  await main()
db.close()
}

run()