const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({ 
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

//Create The Pizza Model
const Pizza = model('Pizza' , PizzaSchema);

//Export The Pizza Model
module.exports = Pizza;