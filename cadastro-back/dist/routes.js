"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
var data = [
    {
        "senha": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "senha": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "senha": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
    },
    {
        "senha": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
    },
    {
        "senha": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca"
    }
];
routes.get('/', function (req, res) {
    return res.json(data);
});
routes.get('/user/:id', function (req, res) {
    var id = req.params.id;
    var client = data[parseInt(id)];
    return res.json(client);
});
routes.post('/addUser', function (req, res) {
    var body = req.body;
    if (!body) {
        return res.status(400).end();
    }
    data.push(body);
    return res.json(body);
});
routes.delete('/delete/:id', function (req, res) {
    var id = req.params.id;
    data.splice(parseInt(id), 1);
    return res.send(data);
});
exports.default = routes;
