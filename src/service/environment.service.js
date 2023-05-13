const { getAllEnvironmentDb, getAllEnvironmentByIdDb } = require('../repository/environment.repository.js');

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb();
    return data;
};

async function getEnvironmentById(id) {
    const data = await getAllEnvironmentByIdDb(id);
    return data;
};

module.exports = { getAllEnvironment, getEnvironmentById };