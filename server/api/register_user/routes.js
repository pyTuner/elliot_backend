const express = require('express');
const router = express.Router({mergeParams:true});
const controller = require('./controller.js');

const post = async (req, res) => {
    try {
    let data = await controller.createUser(req);
    res.status(200).send(data);
    } catch (err) {
        res.status(500).send({error: err.message});
    }

}


router.post('/create', post);

module.exports = router