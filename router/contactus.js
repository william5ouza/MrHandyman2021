/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express')
const router = express.Router()
const app = express()
var msgCtrl = require('../controller');
const services = require('../server/services');




router.get('/addmsg', services.add_msg);
router.post('/api/msg', controller.create);
module.exports = router

