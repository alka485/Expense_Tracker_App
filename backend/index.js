const express = require('express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3005;
const routes = require('./routes/api');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open',() => {
    app.listen(PORT, () => {
        console.log(`Server is running ${PORT}`);
    })
})