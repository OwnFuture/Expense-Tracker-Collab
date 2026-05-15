# Student Expense Tracker - Setup Guide

## Features Implemented

### Authentication
- ✅ **Sign Up Form** - Users can create new accounts with email and password
- ✅ **Login Form** - Existing users can log in with their credentials
- ✅ **Separate Forms** - Login and Sign Up are on different tabs for clarity
- ✅ **Password Hashing** - Passwords are securely hashed using bcryptjs
- ✅ **JWT Tokens** - Secure authentication tokens for session management

### How It Works

1. **Sign Up Tab**
   - User enters email, password, and confirms password
   - Password must be at least 6 characters
   - Passwords must match
   - User data is saved to MongoDB with hashed password
   - User is automatically logged in after signup

2. **Login Tab**
   - User enters email and password
   - System validates credentials against MongoDB
   - User is logged in if credentials are correct
   - Dashboard is shown after successful login

3. **Dashboard Access**
   - After login/signup, user sees the dashboard
   - Can add expenses and income
   - Data is tied to user account

## Setting Up MongoDB

The app uses MongoDB for storing user accounts and transactions. Follow these steps:

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster

### Step 2: Get Connection String
1. In MongoDB Atlas, click "Connect"
2. Select "Drivers" (Node.js)
3. Copy the connection string
4. It will look like: `mongodb+srv://username:password@cluster.mongodb.net/expense_tracker?retryWrites=true&w=majority`

### Step 3: Add Environment Variables
1. Open project settings (top right menu)
2. Go to "Vars" section
3. Add the following environment variables:
   - **MONGODB_URI**: Your connection string from Step 2
   - **JWT_SECRET**: Any random string (e.g., "your-secret-key-12345")

### Step 4: Test Connection
1. Click "Sign Up" tab
2. Enter an email and password
3. Click "Sign Up" button
4. If successful, you'll be logged in and see the dashboard

## Troubleshooting

### MongoDB Connection Error
- Make sure MONGODB_URI is set in environment variables
- Check the connection string is correct
- In MongoDB Atlas, whitelist all IPs (0.0.0.0/0) for development
- Check your internet connection

### Sign Up Fails
- Check browser console (F12) for error messages
- Make sure password is at least 6 characters
- Make sure passwords match in signup form
- Verify MongoDB is connected

### Login Fails
- Check email exists in MongoDB
- Make sure password is correct
- Check MongoDB connection

## Database Schema

The app automatically creates a `users` collection with:
```
{
  email: string,
  password: string (hashed),
  name: string (derived from email),
  createdAt: date
}
```

And a `transactions` collection with user data.
