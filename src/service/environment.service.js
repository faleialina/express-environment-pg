const { getAllEnvironmentDb, getAllEnvironmentByIdDb } = require('../repository/environment.repository.js');

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb();
    return data;
};

async function getEnvironmentById(id) {
    const data = await getAllEnvironmentByIdDb(id);
    const filtered = data.filter((elem) => elem.id == id);
    return filtered;
};

module.exports = { getAllEnvironment, getEnvironmentById };