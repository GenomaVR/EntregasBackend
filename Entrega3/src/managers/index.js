import { ProductManagerFileSystem } from "./ProductManager.js";

const productManager = new ProductManagerFileSystem("./src/db/products.json");

export { productManager}

