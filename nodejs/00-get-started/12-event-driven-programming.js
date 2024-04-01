const EventEmitter = require('events');
const http = require('http');


class MyEmitter extends EventEmitter {
    constructor() {
        super();
    }
}

// Create a Emitter instance
const MyEmitter1 = new MyEmitter();
MyEmitter1.on('ping', () => {
    console.log('Ping reçu ✅');
})

// Trigger ping after 1s
setTimeout(() => {
    MyEmitter1.emit('ping');
}, 1000)

// Creation d'un serveur HTTP
const server = http.createServer();

// Event management
server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to our home page');
});

// Cas de démarrage
server.on('listening', () => {
    console.log('Server running on port 5000...');
});

// Cas d'erreur
server.on('error', (err) => {
    console.error('Something went wrong : ', err);
});

server.listen(5000);
