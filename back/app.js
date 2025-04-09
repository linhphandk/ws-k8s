const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
wss.on('connection', async function connection(ws) {
  console.log('A new client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // Echo the message back

    ws.send(`You said: ${message}`);
  });
  while(true){
  ws.send('Welcome to the WebSocket server!');
	      await sleep(2000);

  }
});

console.log('WebSocket server is running on ws://localhost:8080');
