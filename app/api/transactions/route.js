import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import connectToDatabase from '@/lib/mongodb';

// Middleware to verify JWT token
function verifyToken(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return null;
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    );
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

// GET all transactions for the logged-in user
export async function GET(request) {
  try {
    const userId = verifyToken(request);
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { db } = await connectToDatabase();
    const transactionsCollection = db.collection('transactions');

    const transactions = await transactionsCollection
      .find({ userId: new ObjectId(userId) })
      .sort({ date: -1 })
      .toArray();

    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error('Get transactions error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST a new transaction
export async function POST(request) {
  try {
    const userId = verifyToken(request);
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { date, category, description, amount, type } = await request.json();

    // Validate inputs
    if (!date || !category || !description || !amount) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const transactionsCollection = db.collection('transactions');

    const result = await transactionsCollection.insertOne({
      userId: new ObjectId(userId),
      date: new Date(date),
      category,
      description,
      amount: parseFloat(amount),
      type,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: 'Transaction added successfully',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Post transaction error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE a transaction
export async function DELETE(request) {
  try {
    const userId = verifyToken(request);
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const transactionId = searchParams.get('id');

    if (!transactionId) {
      return NextResponse.json(
        { error: 'Transaction ID is required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const transactionsCollection = db.collection('transactions');

    // Verify the transaction belongs to the user
    const transaction = await transactionsCollection.findOne({
      _id: new ObjectId(transactionId),
      userId: new ObjectId(userId),
    });

    if (!transaction) {
      return NextResponse.json(
        { error: 'Transaction not found' },
        { status: 404 }
      );
    }

    await transactionsCollection.deleteOne({
      _id: new ObjectId(transactionId),
    });

    return NextResponse.json(
      { message: 'Transaction deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete transaction error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
