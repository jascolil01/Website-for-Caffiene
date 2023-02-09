const {Router}= require('express')
const controllers = require('../controllers')
const router = Router();

router.get ('/',(req,res)=>res.send('This is where the caffiene is made'))

router.post('/drinkType', controllers.createDrinkType)

router.get('/drinkType', controllers.getAllDrinkTypes)

router.put('/drinkType/:id', controllers.updateDrinkType)

router.delete('/drinkType/:id', controllers.deleteDrinkType)

router.get('/drinkType/:id', controllers.getDrinkTypeById)



module.exports= router