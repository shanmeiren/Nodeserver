'use strict';

import express from 'express'
import User from '../controller/v1/user'
const router = express.Router();

router.get('/user/:user_id', User.getInfoById);
router.post('/users/adduser', User.addUser);
router.post('/users/updateuser/:user_id', User.updateUserById);
router.delete('/users/deluser/:user_id', User.deleteUserById);

 
export default router