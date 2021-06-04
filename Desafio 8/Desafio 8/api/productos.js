class Productos {
    constructor() {
        this.productos = []
    }

   listar(){
    let respuesta = {}
       if (this.productos.length === 0 ){
        respuesta.error = "No hay productos cargados"
       }else{
           respuesta = this.productos
       }
       return respuesta
   }
   guardar (producto){
       producto.id = this.productos.length + 1
       this.productos.push(producto)
       return producto
   }
   listarPorId(id){
    let respuesta = {}
    if(this.productos[id]){
        respuesta = this.productos[id]
    }else{
        respuesta.error = 'Producto no encontrado'
    }
    return respuesta
   }
}

// exporto una instancia de la clase
module.exports = new Productos();