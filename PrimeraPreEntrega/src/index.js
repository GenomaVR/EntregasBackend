import express from "express"
import { productsRouter } from "./routes/index.js";


const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use("/api/products", productsRouter)

const PORT = 8080;


app.listen(PORT,()=> console.log(`server corriendo en el puerto ${PORT}`))  

