const { Router } = require('express');
const controllers = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/drink', controllers.createDrink)

router.get('/drink', controllers.getAllDrink)

router.put('/drink/:id', controllers.updateDrink)

router.delete('/drink/:id', controllers.deleteDrink)

router.get('/drink/:id', controllers.getDrinkById)

module.exports = router;