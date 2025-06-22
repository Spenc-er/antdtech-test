import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from '../models/book';


async function seed() {
  dotenv.config();

 const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  console.error('❌ MONGO_URL not found in environment variables');
  process.exit(1);
}
  try {
    await mongoose.connect(mongoUrl);
    console.log('✅ Connected to MongoDB');

    await Book.deleteMany({});
    console.log('🧹 Cleared old data');

    const sampleBooks = [
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', year: 1999 },
      { title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
      { title: 'Design Patterns', author: 'Erich Gamma', year: 1994 },
    ];

    await Book.insertMany(sampleBooks);
    console.log('📚 Inserted sample books');

    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
}

seed();
