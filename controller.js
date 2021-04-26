/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var aMsg = require('./model/message_')

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  // new user
  const sectionName='Paiting';
        
        if(req.body.sec_n == 1){
            sectionName = 'Plumbing';
        }else if(req.body.sec_n == 2){
            sectionName = 'Eletric';
        }else if(req.body.sec_n == 3){
            sectionName = 'Heating';
        }
  const msgs = new aMsg({
            section: sectionName,
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            message: req.body.message
            
  });

  // save user in the database
  msgs
    .save(msgs)
    .then((data) => {
      //res.send(data)
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    aMsg.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    aMsg.find()
      .then((msgs) => {
        res.send(Msgs);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

// Update a new idetified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  aMsg.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  aMsg.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};