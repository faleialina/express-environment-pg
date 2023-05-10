const { getAllEnvironmentDb } = require('../repository/environment.repository.js');

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb();
    return data;
};

module.exports = { getAllEnvironment }