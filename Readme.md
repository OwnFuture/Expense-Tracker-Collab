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
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount,
        type: "Expense",
      }),
    });

    setTitle("");
    setAmount("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });

    fetchExpenses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      {expenses.map((item) => (
        <div key={item._id}>
          <h3>
            {item.title} - ৳{item.amount}
          </h3>

          <button onClick={() => deleteExpense(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;