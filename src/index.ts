
const appService = require('./app');

let server = appService.listen(8082, () => {
    console.log('Listening', server.address().port);
});