const uuid = require('uuid');
const { Op, Sequelize } = require('sequelize')
const path = require('path');
const { Type, Size, PizzaType, PizzaSize, Pizza } = require('../models/models')
const ApiError = require('../error/ApiError');
const isEmpty = require('../utils/functions');


class PizzaController {

    async getAll(req, res) {
        let { sortBy, order, page, limit, category, search } = req.query;
        page = page || 1
        limit = limit || 3
        let offset = page * limit - limit;
        let pizzas = {};
        if (category == null && search == null) {
            pizzas = await Pizza.findAndCountAll({
                include: [
                    {
                        model: Type,
                        attributes: ['value'],
                    },
                    {
                        model: Size,
                        attributes: ['value']
                    }
                ],
                order: [[sortBy, order.toUpperCase()]],
                limit, offset
            });
        }
        else if(search == null) {
            pizzas = await Pizza.findAndCountAll({
                include: [
                    {
                        model: Type,
                        attributes: ['value'],
                    },
                    {
                        model: Size,
                        attributes: ['value']
                    }
                ],
                where: { category },
                order: [[sortBy, order.toUpperCase()]],
                limit, offset
            });
        }
        else if(category == null) {
            pizzas = await Pizza.findAndCountAll({
                include: [
                    {
                        model: Type,
                        attributes: ['value'],
                    },
                    {
                        model: Size,
                        attributes: ['value']
                    }
                ],
                where: [ 
                   { title: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', '%' + search.toLowerCase() + '%')}
                 ],
                order: [[sortBy, order.toUpperCase()]],
                limit, offset
            });
        }
        else {
            pizzas = await Pizza.findAndCountAll({
                include: [
                    {
                        model: Type,
                        attributes: ['value'],
                    },
                    {
                        model: Size,
                        attributes: ['value']
                    }
                ],
                where: [ 
                    {category},
                   { title: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', '%' + search.toLowerCase() + '%')}
                 ],
                order: [[sortBy, order.toUpperCase()]],
                limit, offset
            });
        }
        const mappedPizzas = mapPizza(pizzas);
    return res.json(mappedPizzas);
    }
  
}

function mapPizza(pizzas) {
    return pizzas.rows.map(el => {
        return {
            id: el.id,
            imageUrl: el.imageUrl,
            price: el.price,
            title: el.title,
            category: el.category,
            rating: el.rating,
            types: el.types.map(type => type.dataValues.value),
            sizes: el.sizes.map(size => size.dataValues.value)
        }
    });
}

module.exports = new PizzaController()
