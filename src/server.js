import express from 'express';
import userRoutes from './routes/userRoutes/userApis.js';
import productRoutes from './routes/productRoutes/productApis.js';
import { errorHandler } from './middleware/errorHandler.js';


const app = express();
const runningPort = 5000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use(errorHandler);

app.listen(runningPort, () => {
    console.log(`Server is running on port ${runningPort}`);
})