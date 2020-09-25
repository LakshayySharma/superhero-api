const { urlencoded } = require('express');
const express = require('express');
const superhero = require('./routes/superhero');
const db = require('./config/db');

const app = express();

db();
app.use(express.json(urlencoded({
    extended: true
})));

app.use('/api/superhero', superhero);

app.listen(3000, (req, res)=>{
    console.log(`listening on port 3000`);
})