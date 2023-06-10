const Router = require('express')
const router = new Router()
const pizzaController = require('../controllers/pizzaController')
router.get('/', pizzaController.getAll)
module.exports = router
