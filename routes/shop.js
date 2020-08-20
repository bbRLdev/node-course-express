const path = require('path');

const express = require('express');

const rootDir = require('../utilities/path');

const expRouter = express.Router();

expRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = expRouter;