const app = require('./helpers/app');

const port = process.env.PORT || 3000;

const http = require('http').createServer(app);

process.on('uncaughtException', function(err) {
    console.error('Uncaught Exception => %s\n\n%s', err.message, err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection => %s\n\n%s', reason, promise);
});

const server = http.listen(port, (err) => {
    if (err) {
        console.error('Connection Error => %s\n\n%s', err.message, err.stack);
    }

    var host = server.address();

    if (!host || (!host.address || host.address == '' || host.address == '::')) {
        host.address = 'localhost';
    }

    console.info(`Server is listening on http://${host.address}:${host.port}`);
});
