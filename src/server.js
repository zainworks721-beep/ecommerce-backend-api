import express from 'express';
import userRoutes from './routes/userRoutes/userApis.js';
import productRoutes from './routes/productRoutes/productApis.js';
import { errorHandler } from './middleware/errorHandler.js';
import setupMongoDB from './config/setupMongoDB.js';
import authRoutes from './routes/authenticationRoutes/authentication.js';
import profileRoutes from './routes/profileRoutes/profileRoutes.js';
import { configDotenv } from 'dotenv';

configDotenv()

setupMongoDB();

const app = express();
const runningPort = 5000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', authRoutes)
app.use('/api', profileRoutes)
app.use(errorHandler);

app.listen(runningPort, () => {
    console.log(`Server is running on port ${runningPort}`);
})