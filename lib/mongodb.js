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
    // Create a new client if we don't have one
    const client = new MongoClient(mongoUri);
    
    // Connect to MongoDB
    await client.connect();
    
    // Get the database
    const db = client.db('expense_tracker');
    
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
