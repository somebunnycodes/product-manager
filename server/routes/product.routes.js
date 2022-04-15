const productController = require("../controllers/product.controller");

module.exports = (app) => {  
    app.get("/api/products", productController.listProducts);
    app.post("/api/products", productController.createProduct);
}