const { Router } = require('express');

const { httpGetDocumentaries } = require('./documentaries.controller');

const documentariesRouter = Router();

documentariesRouter.route('/').get(httpGetDocumentaries);

module.exports = documentariesRouter;
