import routes from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    delUser
} from '../../controllers/userControllers.js';

import { middleware } from '../../middleware/apiKey.js';
import { validateUser } from '../../middleware/validation.js'


const userRoutes = routes()

userRoutes.get('/users', getUsers);

userRoutes.post('/users', middleware, validateUser, createUser);

userRoutes.put('/users/:id', middleware, validateUser, updateUser,);

userRoutes.delete('/users/:id', middleware, delUser);

userRoutes.get('/users/:id', getUserById);

export default userRoutes;
