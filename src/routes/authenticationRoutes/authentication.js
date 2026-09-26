import routes from 'express';
import { validateUser } from '../../middleware/validation.js';
import { register, loginController } from '../../controllers/authControllers.js';



const authRoutes = routes()

authRoutes.post("/auth/register", validateUser, register)
authRoutes.post("/auth/login", loginController)


export default authRoutes