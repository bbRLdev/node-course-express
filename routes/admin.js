const path = require('path');

const express = require('express');

const rootDir = require('../utilities/path');

const expRouter = express.Router();

expRouter.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

expRouter.post('/add-product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
});

module.exports = expRouter;