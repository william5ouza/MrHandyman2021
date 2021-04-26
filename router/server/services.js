/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const axios = require('axios');


exports.staffRoutes = (req, res) => {
    // Make a get request to /api/msgs
    axios.get('http://localhost:3000/api/msgs')
        .then(function(response){
            res.render('staff', { msgs : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_msg = (req, res) =>{
    res.render('add_msg');
}

exports.update_msg = (req, res) =>{
    axios.get('http://localhost:3000/api/msgs', { params : { id : req.query.id }})
        .then(function(msgdata){
            res.render("update_msgs", { msg : msgdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}