const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('../service/environment.service.js');
const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data);
});

route.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getEnvironmentById(id);
    res.send(data);
});

route.post('/', async (req, res) => {
    const { label, category, priority } = req.body;
    const data = await createEnvironment(label, category, priority);
    res.send(data);
});

route.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnvironment(id, label, category, priority);
    res.send(data);
});

route.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await deleteEnvironment(id);
    res.send(data);
});

module.exports = route;

