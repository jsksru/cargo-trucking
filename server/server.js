const http = require('http');
const App = require('./app');

http.createServer(App).listen(8080);