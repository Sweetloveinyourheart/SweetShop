const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const Hot = require('./middleware/Hot.js');

const productRouter = require('./routers/product');

const app = express();
//connect to MongoDB
const uri = process.env.ATLAS_URL
mongoose.connect(uri, 
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false},
    ); 
//middleware 
app.use(cors());
app.use('/api/hot', Hot);
 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use('/api/product', productRouter);

//running sever
const PORT = process.env.PORT || 9999
app.listen(PORT, ()=> {
    console.log(`Sever is running at localhost:${PORT}`);
});  