const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('../service/environment.service.js');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllEnvironment();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getEnvironmentById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createEnvironment(label, category, priority);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await updateEnvironment(id, label, category, priority);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteEnvironment(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = route;

