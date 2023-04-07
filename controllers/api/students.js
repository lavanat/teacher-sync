const router = require("express").Router();
const { User } = require('../../models');
const Student = require("../../models/student");

router.get('/conduct', (req, res) => {
    User.findAll().then(data => res.json(data))
    .then(document.getElementById.Grade1 = (id,Studentname))
});

router.post('/', ({ body }, res) => {
    User.create(body).then(data => res.json(data))
});


module.exports = router;