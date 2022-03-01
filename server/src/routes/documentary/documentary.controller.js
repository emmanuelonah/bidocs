const documentaries = require('../documentaries/documentaries.mock.json');
const asyncHandler = require('../../middlewares/async-handler');

const { findById } = require('./documentary.model');

const httpGetDocumentaryById = asyncHandler(async (req, res, next) => {
  const { documentaryId } = req.params;
  const documentary = await findById(documentaryId);

  if (documentary) {
    return res.status(200).json({
      success: true,
      data: documentary,
    });
  }

  return res.status(200).json({
    success: true,
    data: documentaries,
  });
});

module.exports = {
  httpGetDocumentaryById,
};
