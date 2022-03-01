const { Router } = require('express');

const { httpGetDocumentaryById } = require('./documentary.controller');

const documentaryRouter = Router();

documentaryRouter.route('/:documentaryId').get(httpGetDocumentaryById);

module.exports = documentaryRouter;
