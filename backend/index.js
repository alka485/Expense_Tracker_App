const express = require('express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3005;

const app = express();


db.once('open',() => {
    app.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    })
})