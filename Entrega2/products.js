const fs = require("fs")

const DB = {
    title: "Producto 1",
    description: "desc del producto 1",
    price: 500,
    thumbnail: "sin imagen",
    code: "abc123",
    stock: 25,
}

jsonStr = JSON.stringify(DB)

fs.promises.writeFile("DB.json", jsonStr)
    .then (() => {
        console.log(" DB SAVED!");
    })
    .catch ( e => {
        console.log("ERROR", e);
    } )