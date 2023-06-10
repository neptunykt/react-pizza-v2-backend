const Router = require('express')
const router = new Router()
const pizzaRouter = require('./pizzaRouter')
router.use('/items', pizzaRouter)
module.exports = router
