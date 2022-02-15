
const Users = require('../models/User');
const Sequelize     = require('sequelize');

const getUsers = async(req,res)=>{

  await Users.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
}
const getUser = async(req,res)=>{
    await Users.findByPk(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });


}
const createUser = async(req,res)=>{
    const newUser = new Users(req.body);
    console.log(newUser.dataValues);
    await Users.create(newUser.dataValues)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });

}
const editUser = async(req,res)=>{
    req.body.fecha_actualizacion = new Date();
    console.log(req.params);
     await Users.update(req.body,{where:{id: req.params.id}})
     .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });

}
const deleteUser = async(req,res)=>{
    await Users.update({estatus:0},{where:{id: req.params.id}})
    .then(num => {
       if (num == 1) {
         res.send({
           message: "Tutorial was updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating Tutorial with id=" + id
       });
     });
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
}