import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/books';
import { errorHandler } from './middlewares/error-handler';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());

app.use('/books', router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
