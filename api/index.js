import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'; //z

dotenv.config();
const app = express();

app.use(express.json());

//create mongodb connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MDB connected');
  })
  .catch((err) => {
    console.log(err);
  });

//set server port to running
app.listen(3000, () => {
  console.log('Server is running on port 3000 with nodemon 😈👌');
});

//api routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
