 //get dependencies
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

router.get('/index', function(req, res) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/staff', function(req, res) {
  res.render('staff',{page:'staff', menuId:'staff'});
});


router.get('/contactus', function(req, res) {
  res.render('contactus', {page:'Contact Us', menuId:'contactus'});
});




module.exports = router;

