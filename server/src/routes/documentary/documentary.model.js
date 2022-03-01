const documentaries = require('../documentaries/documentaries.mock.json');

async function findById(id) {
  const documentary = await documentaries.find((doc) => doc.id === id);

  return Promise.resolve(documentary);
}

module.exports = {
  findById,
};
