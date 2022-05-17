const routes = require('express').Router();

const { User } = require('./app/models')


User.create({ 
    name: "Elvis", 
    email: "elvis@gmail.com",
    password_hash: "123456456456"
});

module.exports = routes;