const {Router}= require('express')
const controllers = require('../controllers')
const router = Router();

router.get ('/',(req,res)=>res.send('This is where the caffiene is made'))

// router.post('/drinkType', controllers.createDrinkType)

// router.get('/drinkType', controllers.getAllDrinkTypes)

// router.put('/drinkType/:id', controllers.updateDrinkType)

// router.delete('/drinkType/:id', controllers.deleteDrinkType)

// router.get('/drinkType/:id', controllers.getDrinkTypeById)

router.post('/drink', controllers.createDrink)

router.get('/drink', controllers.getAllDrink)

router.put('/drink/:id', controllers.updateDrink)

router.delete('/drink/:id', controllers.deleteDrink)

router.get('/drink/:id', controllers.getDrinkById)



module.exports= router