const express = require("express");
const app = express();
const products = require("./getProducts");
const product = require('./getProduct')


const port = 3001;

app.get("/api/products", products);
app.get("/api/product/:id", product);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})

// const express = require("express");
// const app = express();
// const handler = require("./getProducts");

// const port = 3001;

// app.get('/api/products', handler.getProducts);
// app.get('/api/product/:id', handler.getProduct);

// app.listen(port, () => {
//     console.log(`Server listening on port: ${port}`);
// });

