const express = require('express')
const app = express();
const port= 3020

app.get('/', (req, res) => {
    res.send({ message: 'Hellow Word'})
})

module.exports = app