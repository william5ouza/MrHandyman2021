/* global MessageSchema */

const express = require('express')
const mongoose = require ('mongoose');
const router = express.Router()
var msgCtrl = require('../controller');
const services = require('../server/services');

router.get('/', services.staffRoutes);
router.get('/api/msg', msgtrl.find);

module.exports = router;