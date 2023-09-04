"use strict";
var appService = require('./app');
var server = appService.listen(8082, function () {
    console.log('Listening', server.address().port);
});
