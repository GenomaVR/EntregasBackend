const ProductManager = require("./product_manager")

const manager = new ProductManager("products.json");

(async () => {
await manager.addProduct({
    title: "Cerveza quilmes",
    description: "Cerveza quilmes lata 455 Ml",
    price: 250,
    thumbnail: "sin imagen",
    code: "abc123",
    stock: 50,
})

console.log(await manager.getProducts());

await manager.updateProduct(2, {
    title: "Malbec",
    description: "Botella malbec 1 lt",
    price: 550,
    thumbnail: "sin imagen",
    code: "abc1234",
    stock: 50,
})

console.log(await manager.getProducts());
})()

