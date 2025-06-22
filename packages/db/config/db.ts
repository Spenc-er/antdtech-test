import mongoose from 'mongoose';
import dotenv from 'dotenv';

export async function connectToDB() {
  dotenv.config();
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
   console.error('❌ MONGO_URL not found in environment variables');
  process.exit(1);
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}
