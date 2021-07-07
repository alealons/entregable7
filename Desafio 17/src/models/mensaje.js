const knex = require('../database/knex');

class Mensaje {

    constructor() { }

    async guardar(mensaje) {
        try {
            mensaje.fecha = new Date().toLocaleString()
            let resultado = await knex('mensajes').insert(mensaje);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscar(condicion) {
        try {
            let mensajes = knex.from('mensajes').select('*')
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            let resultado = await knex.from('mensajes').where('id', parseInt(condicion)).del()
            return resultado;
            
        } catch (error) {
            throw error;
        }
    }
    async update(condicion,mensaje) {
        try {
           let resultado = await knex('mensajes').where('id', parseInt(condicion)).update({
            mensaje: mensaje.mensaje,
            email: mensaje.email,
            fecha: new Date().toLocaleString()
          })
          return resultado
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Mensaje();