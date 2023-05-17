const {
  getAllEnvironmentDb,
  getEnvironmentByIdDb,
  createEnvironmentDb,
  updateEnvironmentDb,
  deleteEnvironmentDb,
} = require('../repository/environment.repository.js');

async function getAllEnvironment() {
  const data = await getAllEnvironmentDb();
  if (!data.length) throw new Error('массив data пустой');
  return data;
}

async function getEnvironmentById(id) {
  const data = await getEnvironmentByIdDb(id);
  if (!data.length) throw new Error('такого id нет');
  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDb(label, category, priority);
  if (!data.length) throw new Error('данные не сохранены');
  return data;
}

async function updateEnvironment(id, label, category, priority) {
  const data = await updateEnvironmentDb(id, label, category, priority);
  if (!data.length) throw new Error('такого id нет');
  return data;
}

async function deleteEnvironment(id) {
  const data = await deleteEnvironmentDb(id);
  if (!data.length) throw new Error('такого id нет');
  return data;
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment };
