const documentaries = require('./documentaries.mock.json');
const asyncHandler = require('../../middlewares/async-handler');

const httpGetDocumentaries = asyncHandler(async (req, res, next) => {
  const _documentaries = await documentaries;
  res.status(200).json({
    success: true,
    data: _documentaries,
  });
});

module.exports = {
  httpGetDocumentaries,
};
