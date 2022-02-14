const {createServer} = require('https');
const {config} = require('dotenv');
require('colors');

config();

const {app} = require('./server');

const PORT = Number(process.env.PORT ?? 5000);
const HOST = process.env.HOST ?? 'localhost';

const httpServer = createServer(app);

function startServer() {
  httpServer.listen(PORT, HOST, () => {
    console.log(`Server started at http://${HOST}:${PORT}`.underline.green.bold);
  });
}

startServer();
