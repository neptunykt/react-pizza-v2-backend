'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sizes', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1,
      value: 26
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 2,
      value: 30
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 3,
      value: 40
    }
    ], {});

    await queryInterface.bulkInsert('types', [{
      id: 1,
      value: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      id: 2,
      value: 2,
      createdAt: new Date(),
      updatedAt: new Date(),

    }
    ], {});
    await queryInterface.bulkInsert('pizzas', [{
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "first_pizza.jpg",
      title: "Пепперони Фреш с перцем",
      price: 803,
      category: 1,
      rating: 4
    },
    {
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "second_pizza.jpg",
      title: "Сырная",
      price: 245,
      category: 1,
      rating: 6
    },
    {
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "third_pizza.jpg",
      title: "Цыпленок барбекю",
      price: 295,
      category: 2,
      rating: 4
    },
    {
      id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "fourth_pizza.jpg",
      title: "Кисло-сладкий цыпленок",
      price: 275,
      category: 3,
      rating: 2
    },
    {
      id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "fifth_pizza.jpg",
      title: "Чизбургер-пицца",
      price: 415,
      category: 4,
      rating: 8
    },
    {
      id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "sixth_pizza.jpg",
      title: "Крэйзи пепперони",
      price: 580,
      category: 3,
      rating: 2
    },
    {
      id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "seventh_pizza.jpg",
      title: "Пеперрони",
      price: 675,
      category: 2,
      rating: 9
    },
    {
      id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "eighth_pizza.jpg",
      title: "Маргарита",
      price: 450,
      category: 5,
      rating: 10
    },
    {
      id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "ninth_pizza.jpg",
      title: "Четыре сезона",
      price: 395,
      category: 6,
      rating: 10
    },
    {
      id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "tenth_pizza.jpg",
      title: "Овощи и грибы 🌱",
      price: 285,
      category: 6,
      rating: 7
    },
    ], {});

    await queryInterface.bulkInsert('pizza_sizes', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 1,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 1,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 1,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 2,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 2,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 3,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 3,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 4,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 4,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 4,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 5,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 5,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 5,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 6,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 6,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 7,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 7,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 7,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 8,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 8,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 8,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 9,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 9,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 9,
        sizeId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 10,
        sizeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 10,
        sizeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 10,
        sizeId: 3
      },
    ]);
    await queryInterface.bulkInsert('pizza_types', [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 1,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 1,
        typeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 2,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 3,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 4,
        typeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 5,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 5,
        typeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 6,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 7,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 7,
        typeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 8,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 8,
        typeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 9,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 9,
        typeId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 10,
        typeId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        pizzaId: 10,
        typeId: 2
      }

    ]);

}
};
