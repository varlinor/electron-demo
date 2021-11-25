import httpServer from 'http-server';
const conns = [];
let server;
function startLocalServer() {
  server = httpServer.createServer({ root: './resources/app' }).listen(7777);
  console.log('server is started');
  server.on('connection', (socket) => {
    conns.push(socket);
    socket.once('close', () => {
      conns.splice(conns.indexOf(socket), 1);
    });
  });
}

function closeLocalServer() {
  conns.map((conn) => {
    conn.distroy();
  });
  if (server) {
    server.close(() => {
      console.log('local server is closing!');
    });
  }
}
