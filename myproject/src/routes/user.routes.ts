import { Router } from 'express';
import { CreatedAt } from 'sequelize-typescript';
import { createUser, getAllUsers, getUserById, updateUser } from '../controller/user.controller';

const router = Router();
router.get('/:userId', getUserById);
router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:userId', updateUser);




export default router;
