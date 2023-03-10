const { Router } = require('express');
const controllers = require('../controllers')

const router = Router();

router.get('/', (req, res) => res.send('This is where the caffeine is made!'))

router.post('/drink', controllers.createDrink)

router.get('/drink', controllers.getAllDrink)

router.put('/drink/:id', controllers.updateDrink)

router.delete('/drink/:id', controllers.deleteDrink)

router.get('/drink/:id', controllers.getDrinkById)

router.get('/drink/:typeOfCaffeine', controllers.getDrinkByGenre)



router.post('/comment', controllers.createComment)

router.get('/comment', controllers.getAllComment)

router.put('/comment/:id', controllers.updateComment)

router.delete('/comment/:id', controllers.deleteComment)

router.get('/comment/drink/:id', controllers.getCommentByDrink)

router.get('/comment/:id', controllers.getCommentById)

module.exports = router;