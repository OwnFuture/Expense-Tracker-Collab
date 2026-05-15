import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  // If we already have a connection, return it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Get MongoDB URI from environment variables
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    throw new Error('Please add your MONGODB_URI to .env.local');
  }

  try {
    // Create a new client with SSL options
    const client = new MongoClient(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      retryReads: true,
      maxPoolSize: 10,
      minPoolSize: 2,
      tls: true,
    });
    
    // Connect to MongoDB
    await client.connect();
    
    // Get the database
    const db = client.db('Expense_Tracker');
    
    // Cache the connections
    cachedClient = client;
    cachedDb = db;
    
    console.log('Connected to MongoDB successfully');
    
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectToDatabase;
