function isValidEnvironmentId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id is not a number');
  if (id <= 0) throw new Error('id is a negative number');
  next();
}

function isValidEnvironmentBody(req, res, next) {
  const { label, category, priority } = req.body;
  if (!label) throw new Error('label is missing');
  if (!category) throw new Error('category is missing');
  if (!priority) throw new Error('priority is missing');

  if (!isNaN(label)) throw new Error('label is a number');
  if (!isNaN(category)) throw new Error('category is a number');
  if (isNaN(priority)) throw new Error('priority is not a number');
  next();
}
module.exports = { isValidEnvironmentId, isValidEnvironmentBody };
