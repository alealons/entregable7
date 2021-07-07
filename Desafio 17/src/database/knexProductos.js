const options = require('../config/dataBaseProductos');
const knex = require('knex')(options);

// exporto el objeto para usarlo en otros modulos
module.exports = knex;