"use client";
import "../public/style.css";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Login Section */}
      <div id="loginSection" className="login-container">
        <div className="login-box">
          <div className="login-header">
            <div className="logo">
              <span className="logo-icon">💰</span>
            </div>
            <h1>Student Expense Tracker</h1>
            <p>Manage Your Money Wisely</p>
          </div>

          <form id="loginForm" className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="student@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Login
            </button>

            <p className="login-hint">
              Demo: Use any email and password (e.g.,
              student@example.com / password123)
            </p>
          </form>
        </div>
      </div>

      {/* Main Dashboard Section */}
      <div
        id="dashboardSection"
        className="dashboard hidden"
      >
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-small">💰</div>
            <h2>Expense Tracker</h2>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className="nav-item active" data-section="dashboard">
              <span className="nav-icon">📊</span>
              <span className="nav-text">Dashboard</span>
            </a>

            <a href="#" className="nav-item" data-section="expenses">
              <span className="nav-icon">💸</span>
              <span className="nav-text">Expenses</span>
            </a>

            <a href="#" className="nav-item" data-section="income">
              <span className="nav-icon">💵</span>
              <span className="nav-text">Income</span>
            </a>

            <a href="#" className="nav-item" data-section="budget">
              <span className="nav-icon">📈</span>
              <span className="nav-text">Budget</span>
            </a>

            <a href="#" className="nav-item" data-section="reports">
              <span className="nav-icon">📋</span>
              <span className="nav-text">Reports</span>
            </a>

            <a href="#" className="nav-item" data-section="settings">
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <button id="logoutBtn" className="btn btn-logout">
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Header */}
          <div className="top-header">
            <div className="header-left">
              <h1>Student Expense Tracker</h1>
            </div>

            <div className="header-right">
              <select id="monthSelector" className="month-select">
                <option value="all">All Time</option>
                <option value="2026-01">January 2026</option>
                <option value="2026-02">February 2026</option>
                <option value="2026-03">March 2026</option>
                <option value="2026-04">April 2026</option>
                <option value="2026-05">May 2026</option>
                <option value="2026-06">June 2026</option>
                <option value="2026-07">July 2026</option>
                <option value="2026-08">August 2026</option>
                <option value="2026-09">September 2026</option>
                <option value="2026-10">October 2026</option>
                <option value="2026-11">November 2026</option>
                <option value="2026-12">December 2026</option>
              </select>

              <div className="user-profile">
                <span id="userName">Student</span>
              </div>
            </div>
          </div>

          {/* Dashboard View */}
          <div id="dashboardView" className="content-view active">
            {/* Summary Cards */}
            <div className="summary-cards">
              <div className="card card-cost">
                <div className="card-icon">💳</div>

                <div className="card-content">
                  <p className="card-label">Total Cost</p>
                  <h3 className="card-value" id="totalCost">
                    0.00
                  </h3>
                  <span className="card-currency">৳</span>
                </div>
              </div>

              <div className="card card-income">
                <div className="card-icon">💰</div>

                <div className="card-content">
                  <p className="card-label">Total Income</p>
                  <h3 className="card-value" id="totalIncome">
                    0.00
                  </h3>
                  <span className="card-currency">৳</span>
                </div>
              </div>

              <div className="card card-budget">
                <div className="card-icon">✓</div>

                <div className="card-content">
                  <p className="card-label">Remaining Budget</p>
                  <h3 className="card-value" id="remainingBudget">
                    0.00
                  </h3>
                  <span className="card-currency">৳</span>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="dashboard-grid">
              {/* Pie Chart */}
              <div className="chart-container">
                <h2>Expenses by Category</h2>
                <canvas id="expenseChart" width="300" height="300"></canvas>
                <div id="chartLegend" className="chart-legend"></div>
              </div>

              {/* Recent Transactions */}
              <div className="transactions-container">
                <div className="transactions-header">
                  <h2>Recent Transactions</h2>

                  <div className="transaction-buttons">
                    <button id="addExpenseBtn" className="btn btn-secondary">
                      + Add Expense
                    </button>

                    <button id="addIncomeBtn" className="btn btn-secondary">
                      + Add Income
                    </button>
                  </div>
                </div>

                <div className="table-wrapper">
                  <table className="transactions-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody id="transactionsBody"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Expenses View */}
          <div id="expensesView" className="content-view">
            <h2>All Expenses</h2>
            <div id="expensesList" className="expenses-list"></div>
          </div>

          {/* Income View */}
          <div id="incomeView" className="content-view">
            <h2>All Income</h2>
            <div id="incomeList" className="income-list"></div>
          </div>

          {/* Budget View */}
          <div id="budgetView" className="content-view">
            <h2>Budget Management</h2>

            <div className="budget-section">
              <div className="budget-info">
                <input
                  type="number"
                  id="budgetAmount"
                  placeholder="Set monthly budget"
                  min="0"
                  step="100"
                />

                <button id="setBudgetBtn" className="btn btn-primary">
                  Set Budget
                </button>
              </div>

              <div id="budgetDisplay" className="budget-display">
                <p>
                  Monthly Budget: <strong id="budgetValue">৳ 5,000</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Reports View */}
          <div id="reportsView" className="content-view">
            <h2>Monthly Reports</h2>
            <div id="reportContent" className="report-content"></div>
          </div>

          {/* Settings View */}
          <div id="settingsView" className="content-view">
            <h2>Settings</h2>

            <div className="settings-group">
              <h3>Notifications</h3>

              <label className="checkbox-label">
                <input type="checkbox" id="budgetAlert" defaultChecked />
                <span>Alert when spending reaches 50% of budget</span>
              </label>

              <label className="checkbox-label">
                <input type="checkbox" id="dailyReminder" defaultChecked />
                <span>Daily spending reminder</span>
              </label>
            </div>

            <div className="settings-group">
              <h3>Appearance</h3>

              <label className="checkbox-label">
                <input type="checkbox" id="darkMode" />
                <span>Dark Mode</span>
              </label>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <div id="transactionModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 id="modalTitle">Add Expense</h2>
            <button className="close-modal">&times;</button>
          </div>

          <form id="transactionForm" className="transaction-form">
            <div className="form-group">
              <label htmlFor="transDate">Date</label>
              <input type="date" id="transDate" required />
            </div>

            <div className="form-group">
              <label htmlFor="transCategory">Category</label>

              <select id="transCategory" required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Hostel Fee">Hostel Fee</option>
                <option value="Study Materials">Study Materials</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Mobile Recharge">Mobile Recharge</option>
                <option value="Tuition">Tuition (Income)</option>
                <option value="Part-time Job">Part-time Job (Income)</option>
                <option value="Scholarship">Scholarship (Income)</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="transDescription">Description</label>

              <input
                type="text"
                id="transDescription"
                placeholder="Enter description"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="transAmount">Amount</label>

              <input
                type="number"
                id="transAmount"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Add Transaction
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      <div id="notification" className="notification"></div>
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
