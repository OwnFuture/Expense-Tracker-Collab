Student Expense Tracker is a full-stack web application designed to help students manage their personal finances by tracking income and expenses in a simple and organized way.

Key Features
User Registration (Sign Up) with email and password
Secure Login System
Password Encryption using bcryptjs
JWT-based Authentication
Personal Dashboard for each user
Add and Manage Income Records
Add and Manage Expense Records
User-specific financial data storage
Responsive and user-friendly interface
Technology Stack
Frontend: Next.js, React, CSS
Backend: Next.js API Routes
Database: MongoDB Atlas
Authentication: JWT (JSON Web Token)
Password Security: bcryptjs
How the System Works
Users create an account through the Sign Up page.
Passwords are securely hashed before being stored in MongoDB.
After successful registration or login, a JWT token is generated.
Users access their personal dashboard.
Income and expense records are stored and managed in MongoDB.
Each user can only access their own financial data.
Database Collections
Users Collection

Stores:

Email
Hashed Password
User Name
Account Creation Date
Transactions Collection

Stores:

Income Entries
Expense Entries
User Reference
Transaction Details
Project Goal

The main goal of this project is to provide students with an easy-to-use financial management system that helps them monitor spending habits, track income sources, and maintain better control over their personal budgets.