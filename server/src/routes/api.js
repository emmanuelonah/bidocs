const { Router } = require('express');

const documentariesRouter = require('./documentaries/documentaries.route');

const apiRouter = Router();

apiRouter.use('/documentaries', documentariesRouter);

module.exports = apiRouter;
