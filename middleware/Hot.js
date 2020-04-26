const express = require('express');
const router = express.Router();
const Product = require('./../modules/product');

router.get('/mostlike',async (req, res, next) => {
    const documents = await Product.find().select({like: 1, description: 1, name: 1, image: 1});
    documents.sort((a, b) => b.like - a.like);
    res.status(200).json({
        "1st" : documents[0],
        "2nd" : documents[1],
        "3th" : documents[2]
    });
    next();
});
router.get('/cheapest',async (req, res, next) => {
    const documents = await Product.find().select({price :1, description: 1, name: 1, image: 1});
    documents.sort((a, b) => b.price - a.price);
    res.status(200).json({
        "1st" : documents[0],
        "2nd" : documents[1],
        "3th" : documents[2]
    });
    next();
});
router.get('/earliest', async (req, res, next) => {
    const documents = await Product.find().select({create_date: 1, description: 1, name: 1, image: 1});
    documents.sort((a, b) => b.create_date - a.create_date);
    res.status(200).json({
        "1st" : documents[0],
        "2nd" : documents[1],
        "3th" : documents[2]
    });
    next();
});

module.exports = router;