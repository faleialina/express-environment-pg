const { getAllEnvironmentDb, getEnvironmentByIdDb, createEnvironmentDb, updateEnvironmentDb, deleteEnvironmentDb } = require('../repository/environment.repository.js');

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb();
    return data;
};

async function getEnvironmentById(id) {
    const data = await getEnvironmentByIdDb(id);
    return data;
};

async function createEnvironment(label, category, priority) {
    const data = await createEnvironmentDb(label, category, priority);
    return data;
};

async function updateEnvironment(id, label, category, priority) {
    const data = await updateEnvironmentDb(id, label, category, priority);
    return data;
};

async function deleteEnvironment(id) {
    const data = await deleteEnvironmentDb(id);
    return data;
};

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment };