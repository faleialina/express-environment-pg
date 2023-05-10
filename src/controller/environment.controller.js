const express = require('express');
const { getAllEnvironment } = require('../service/environment.service.js');
const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data);
});

module.exports = route;