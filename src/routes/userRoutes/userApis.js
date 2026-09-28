import routes from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    delUser
} from '../../controllers/userControllers.js';

import middleware from '../../middleware/middleware.js';
import roleChecker from '../../middleware/roleChecker.js';
import { validateUser } from '../../middleware/validation.js'
import ownershipMiddleware from '../../middleware/ownershipMiddleware.js';


const userRoutes = routes()

userRoutes.get('/users', middleware, roleChecker, getUsers);

userRoutes.post('/users', middleware, roleChecker, validateUser, createUser);

userRoutes.put('/users/:id', middleware, ownershipMiddleware, updateUser,);

userRoutes.delete('/users/:id', middleware, ownershipMiddleware, delUser);

userRoutes.get('/users/:id', middleware, getUserById);

export default userRoutes;

