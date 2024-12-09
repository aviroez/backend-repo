import express from 'express';
import { verifyToken } from '../middleware/authMiddleware';
import { fetchUserData, fetchUserDataById, updateUserData } from '../controller/api';

const userRoutes = express.Router();

userRoutes.get('/:uid', verifyToken, fetchUserDataById);
userRoutes.get('/', verifyToken, fetchUserData);
userRoutes.put('/', verifyToken, updateUserData);

export default userRoutes;
