const express = require('express');
const router = express.Router();
const Product = require('./../modules/product.js');

router.get('/', async (req, res, next) => {
    try {
        const result = await Product.find().select({name: 1, description: 1, price: 1, image: 1});
        res.status(200).json(result);
        next();
    } catch (error) {
        res.status(404).json(error);
    }
});
router.get('/findbyid/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Product.findById(id).select({name: 1, description: 1, price: 1, image: 1});
        res.status(200).json(result);
        next();
    } catch (error) {
        res.status(404).json(error)
    }
});
router.get('/criteria', async (req, res, next) => {
    try {
        const criteria = {name :RegExp(req.query.name, 'i')};      
        const result = await Product.find(criteria).select({name: 1, description: 1, price: 1, image: 1});
        res.status(200).json(result);
        next();
    } catch (error) {
        res.status(404).json(error);
    }
});
router.post('/add', async (req, res, next) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image

        });
        const result = await newProduct.save();
        res.status(200).json(result);
        next();
    } catch (error) {
        res.status(404).json(error);
    }
})
router.put('/update/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        };
        await Product.findByIdAndUpdate(id, update);
        res.status(200).json({result: 'Updated !'})
        next();

    } catch (error) {
        res.status(404).json(error);
    }
});
router.delete('/remove/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndRemove(id);
        res.status(200).json({result: 'Successfully !!'});
        next();
    } catch (error) {
        res.status(404).json(error);
    }
}) 

module.exports = router;