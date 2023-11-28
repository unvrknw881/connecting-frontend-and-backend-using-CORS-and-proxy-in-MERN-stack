const express = require('express');
// import cors from 'cors'; // import statements work only for type: module

const app = express();


// const cors = require('cors');


// app.use(cors());

app.get('/', (req, res) => {
    res.send("server working!");
});


const products = [{id: 1, name: "chair", cost: 800, material: "wood"}, {id: 2, name: "Table", cost: 2500, material: "wood"}, {id: 3, name: "TV", cost: 50000, material: "plastic and glass"}];

app.get('/api/productdetails', (req, res) => {
    res.send(products);
});


const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`server running on port: ${Port}`);
});