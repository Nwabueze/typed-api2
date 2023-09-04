const express = require('express');
const app = new express();


app.use('/api/test1', require('./routes/test1.js'));
app.use('/api/test2', require('./routes/test2.js'));

app.use((req:any ,res: any) => {
    res.status(404)
        .send('This page cannot be found');
});

/**
 * T start the application in dev mode use "npm run start:dev"
 * 
 */

module.exports = app