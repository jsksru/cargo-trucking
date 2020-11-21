const http = require('http');
const App = require('./app');

const PORT = 8080;

http.createServer(App)
  .listen(PORT)
  .on('listening', () => {
    console.log(`Server listening on ${PORT} port!`);
  })
  .on('error', (err) => {
    console.log('SERVER ERROR:', err);
  });