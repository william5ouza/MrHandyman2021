/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const router = express.Router()
const msgCtrl = require('../control/message_ctrl');
var msg = require('../model/message_')//This var is extremely necessary for loading the table


router.get('/index', function(req, res) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/contactus', function(req, res) {
  res.render('contactus', {page:'Contact Us', menuId:'contactus'});
});


// API
router.post('/contactus/msg', msgCtrl.createMsg);
router.get('/staff', msgCtrl.getMessages);
router.post('/staff/:id', msgCtrl.deleteMsg);

module.exports = router

