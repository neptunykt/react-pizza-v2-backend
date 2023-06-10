const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Pizza = sequelize.define('pizza', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    imageUrl: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    category: {type: DataTypes.INTEGER},
    rating: {type: DataTypes.INTEGER},
})

// промежуточная таблица многие-ко-многим
const PizzaSize = sequelize.define('pizza_size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const PizzaType = sequelize.define('pizza_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.INTEGER}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.INTEGER}
})


// многие ко многим
Size.belongsToMany(Pizza, {through: PizzaSize })
Pizza.belongsToMany(Size, {through: PizzaSize })
Pizza.hasMany(PizzaSize);
PizzaSize.belongsTo(Pizza);
Size.hasMany(PizzaSize);
PizzaSize.belongsTo(Size);


Type.belongsToMany(Pizza, {through: PizzaType })
Pizza.belongsToMany(Type, {through: PizzaType })
Pizza.hasMany(PizzaType);
PizzaType.belongsTo(Pizza);
Type.hasMany(PizzaType);
PizzaType.belongsTo(Type);




module.exports = {
    Pizza,
    Size,
    PizzaSize,
    Type,
    PizzaType
}





