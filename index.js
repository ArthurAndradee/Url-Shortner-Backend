import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config({ path: './.env' });

console.log(process.env.MONGO_URI)

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import urlsRouter from './routes/urls.js';
app.use('/api', urlsRouter);

app.listen(5000, () => console.log("Server is running"))