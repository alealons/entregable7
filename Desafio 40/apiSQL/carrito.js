const Carritos = require('../modelos/carrito'); 

class CarritoController {

    constructor() { }

    async guardar(productos) {
        try {
            return await Carritos.guardar(productos);
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            return await Carritos.buscar();
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id) {
        try {
            return await Carritos.buscarPorId(id);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            return await Carritos.eliminar(condicion);
        } catch (error) {
            throw error;
        }
    }
    async update(condicion, producto) {
        try {
            return await Carritos.update(condicion, producto);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CarritoController();