const { config } = require('dotenv');
const { createServer } = require('https');
require('colors');

config();

const app = require('./app');

const PORT = Number(process.env.PORT ?? 8080);
const HOST = process.env.HOST ?? 'localhost';
const __dev__ = process.env.ENV;

const httpServer = createServer(app);

function startServer() {
  httpServer.listen(PORT, HOST, () => {
    if (__dev__) {
      console.log(`Server started at http://${HOST}:${PORT}/api/v1`.underline.green.bold);
    }
  });
}

startServer();
