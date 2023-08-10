const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller.js');

const post = async (req, res) => {
    try {
        let data = await controller.createUser(req);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }

}

const get = async (req, res) => {
    try {
        console.log("runs")
        let data = await controller.readUser(req);
        res.status(200).send(data);
        console.log("done")
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const put = async (req, res) => {
    try {
        let data = await controller.updateUser(req);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const remove = async (req, res) => {
    try {
        let data = await controller.deleteUser(req);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

router.post('/create', post);
router.get('/get', get);
router.put('/update/:_id', put);
router.delete('/delete/:_id', remove);

module.exports = router