import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://arthurandrad23:vidaloka123@cluster0.xjlyyzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database Connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
export default connectDB;