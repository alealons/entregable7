const Productos = require('../modelos/productos');

class ProductosController {

    constructor() { }

    async guardar(productos) {
        try {
            return await Productos.guardar(productos);
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            return await Productos.buscar();
        } catch (error) {
            throw error;
        }
    }
    async buscarPorId(id) {
        try {
            return await Productos.buscarPorId(id);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            return await Productos.eliminar(condicion);
        } catch (error) {
            throw error;
        }
    }
    async update(condicion, producto) {
        try {
            return await Productos.update(condicion, producto);
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = new ProductosController();