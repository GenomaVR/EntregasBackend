import express from "express"
import {productManager} from "./managers/index.js"

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const PORT = 8080;

app.get("/api/products", async(req,res)=>{

    try {
        const { limit } = req.query
 
    const allProducts = await productManager.getProducts();

    if(!limit || limit < 1){
        return res.send({success: true, products: allProducts})
    }

    const products = allProducts.slice(0, limit)
    res.send({success: true, products})
    } catch (error) {
        console.log(error);
        res.send({success: false, error: "ha ocurrido un error"})
    }
    


});

app.get("/api/products/:id", async (req,res)=>{
    try {
        const { id: paramID } = req.params;

        const id = Number(paramID)

        if(id < 0){
            return res.send({success: false, error: "id debe ser numero valido"})
        }

        const product = await productManager.getProductById(id)

        if(!product){
            return res.send({success: false, error: "no se encontro el producto"})
        }

        res.send({success: true, product})
    } catch (error) {
        console.log(error);
        res.send({success: false, error: "error"});
    }
});

app.post("/api/products", async (req, res) => {
    try {
      const { title, description, price, code } = req.body;
  
      if (!title || !description || !price || !code) {
        return res.send({
          success: false,
          error: "Estas variables son obligatorias",
        });
      }
  
      const savedProduct = await productManager.saveProduct({
        title,
        description,
        price,
        code,
      });
  
      res.send({ success: true, product: savedProduct });
    } catch (error) {
      console.log(error);

      if (error.name === ERRORS.VALIDATION_ERROR) {
        return res.send({
          success: false,
          error: `${error.name}: ${error.message}`,
        });
      }
  
      res.send({ success: false, error: "Ha ocurrido un error" });
    }
  });


app.listen(PORT,()=> console.log(`server corriendo en el puerto ${PORT}`))  

