'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3800;
const mongoDb = `mongodb+srv://vivekuser:vivekadmin@cluster0-mfrcr.mongodb.net/social?retryWrites=true&w=majority`;

mongoose.connect(mongoDb, { useNewUrlParser: true })
.then(() => {
    console.log('DB: Connect OK!');
    app.listen(port, () => {
        console.log('Server running on => http://localhost:' + port);
    });
})
.catch(err => console.log(err));

console.log('Starting...');
