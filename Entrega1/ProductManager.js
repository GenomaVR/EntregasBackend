class ProductManager {



    constructor () {
        this.product = []
    }

    getProducts = () => { return this.product}

    // getNextCode = () => {
    //     const count = this.product.length
    //     if (count > 0) {
    //         const lastEvent = this.product[count-1]
    //         const lastCode = lastEvent.code
    //         const nextCode = lastCode + 1

    //         return nextCode
    //     } else {
    //         return 1
    //     }
    // }


    addProduct = (title, description, price, thumbnail, code, stock) => {

        const productID = this.product.find(productID => productID.code == code)
        if (productID  != undefined){
            console.log("ya existe un producto con el mismo CODE")
            return
        }

        // const code = this.getNextCode()

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

    // getProductById = (productID) => {
    //     if(productID > this.product.length || productID < 1 ){
    //         console.log("el id no existe o es menos que 1, not found")

    //         return null
    //     } 
    //     return this.product[productID-1]

    // }


    getProductById(id) {
        let producto = this.product.find((product) => product.id === id);
        if (producto) {
            return producto;
        }
        return "Producto no encontrado";
    }


    // addParticipant = (eventID, userID) => {
    //     const event = this.events.find(event => event.id == eventID)
    //     if(event == undefined) return
 
    //     if(!event.participants.includes(userID)){
    //      event.participants.push(userID)
    //      return 1
    //     }
    //     return -1
 
    //  }
 

}


const manager = new ProductManager()
console.log(manager.getProducts())



manager.addProduct("Procuto prueba", "esto es un producto lrueba", 200, "sin img", "abc123", 25)
manager.addProduct("Procuto prueba", "esto es un producto lruebasdasda", 200, "sin img", "abc123", 25)
// manager.addProduct("procuto prueba","esto es u procuto prueba", 200, "sin imagen", 25 )

console.log(manager.getProducts(1))
console.log(manager.getProductById(2))