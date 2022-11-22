class ProductManager {

    constructor () {
        this.product = []
    }

    getProducts = () => { return this.product}

    getNextCode = () => {
        const count = this.product.length
        if (count > 0) {
            const lastEvent = this.product[count-1]
            const lastCode = lastEvent.code
            const nextCode = lastCode + 1

            return nextCode
        } else {
            return 1
        }
    }


    addProduct = (title, description, price, thumbnail, stock) => {

        const code = this.getNextCode()

        const product = {

            title,
            description,
            price,
            thumbnail,
            code,
            stock: stock ?? 25,

        }
        this.product.push(product)
    }


    

}

const manager = new ProductManager()
manager.addProduct("Producto Prueba", "esto es un producto prueba", 200, "sin imagen", 30)
manager.addProduct("procuto prueba", "esto es u procuto prueba", 200, "sin imagen", 40 )



console.log(manager.getProducts())