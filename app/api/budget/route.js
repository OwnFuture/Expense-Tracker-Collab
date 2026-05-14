import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import connectToDatabase from '@/lib/mongodb';

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

// GET user's budget
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
    const budgetCollection = db.collection('budgets');

    const budget = await budgetCollection.findOne({
      userId: new ObjectId(userId),
    });

    if (!budget) {
      return NextResponse.json(
        { budget: 5000 }, // Default budget
        { status: 200 }
      );
    }

    return NextResponse.json(
      { budget: budget.amount },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get budget error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST/UPDATE user's budget
export async function POST(request) {
  try {
    const userId = verifyToken(request);
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { amount } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Budget amount must be greater than 0' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const budgetCollection = db.collection('budgets');

    const result = await budgetCollection.updateOne(
      { userId: new ObjectId(userId) },
      {
        $set: {
          userId: new ObjectId(userId),
          amount: parseFloat(amount),
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json(
      { message: 'Budget updated successfully', budget: amount },
      { status: 200 }
    );
  } catch (error) {
    console.error('Post budget error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
