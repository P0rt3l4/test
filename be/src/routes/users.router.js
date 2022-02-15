const { Router } = require('express');
const res = require('express/lib/response');

const { getUsers, createUser, getUser, editUser, deleteUser} = require('../controllers/users.controllers')
const router =  Router();


router.get('/',getUsers)

router.post('/',createUser)

router.get('/:id', getUser)

router.put('/:id', editUser)

router.delete('/:id', deleteUser)

module.exports = router;