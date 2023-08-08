const express = require('express');
const router = express.Router({ mergeParams: true });

const register_user = require('./register_user');
router.use('/', register_user.router);

module.exports = { router }