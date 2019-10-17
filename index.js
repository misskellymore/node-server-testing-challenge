const server = require('./server.js');

const port = 6262;

server.listen(port, () => console.log(`server listening on ${port}`));