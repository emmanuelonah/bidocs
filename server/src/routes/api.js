const { Router } = require('express');

const documentaryRouter = require('./documentary/documentary.route');
const documentariesRouter = require('./documentaries/documentaries.route');

const apiRouter = Router();

apiRouter.use('/documentaries', documentariesRouter);
apiRouter.use('/documentary', documentaryRouter);

module.exports = apiRouter;
