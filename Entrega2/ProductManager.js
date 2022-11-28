class ProductManager {

    constructor () {
        this.product = []
    }

    getProducts = () => { return this.product}

    getNextID = () => {
        const count = this.product.length
        if (count == 0) return 1

        const lastEvent = this.product[count-1]
        const lastID = lastEvent.id
        const nextID = lastID + 1
        return nextID

    }


    addProduct = (title, description, price, thumbnail, code, stock) => {

        const productCode = this.product.find(productCode => productCode.code == code)
        if (productCode  != undefined){
            console.log("ya existe un producto con el mismo CODE")
            return
        }

        let id = this.getNextID()

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock: stock ?? 25,
            id,
        }
        this.product.push(product)
    }

     getProductById(id) {
        const producto = this.product.find((product) => product.id === id);
         if (producto) {
             return producto;
         }
        return "Producto no encontrado";
     }





}





const manager = new ProductManager()
//console.log(manager.getProducts())
manager.addProduct("Procuto prueba 1", "prueba producto 1", 200, "sin img", "abc123", 25)
manager.addProduct("Procuto prueba", "Segundo producto prueba", 200, "sin img", "abc123123", 25)
manager.addProduct("Procuto prueba 1", "prueba repetido", 200, "sin img", "abc123", 25)


console.log(manager.getProducts())
console.log(manager.getProductById(1))






