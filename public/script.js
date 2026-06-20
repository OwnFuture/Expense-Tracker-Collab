// Application State
let appState = {
  transactions: [],
  budget: 5000,
  currentUser: null,
  currentMonth: "all",
  token: null,
}

// application changed

// API Base URL
const API_BASE_URL = '/api';

// Initialize App
setTimeout(() => {
  loadFromLocalStorage()
  setupEventListeners()
  setDefaultDate()

  if (!appState.currentUser) {
    showLoginSection()
  } else {
    showDashboard()
    loadTransactions()
  }
}, 100)

function setupEventListeners() {
  // Auth tabs
  document.getElementById("loginTabBtn").addEventListener("click", switchAuthTab)
  document.getElementById("signupTabBtn").addEventListener("click", switchAuthTab)

  // Login & Signup
  document.getElementById("loginForm").addEventListener("submit", handleLogin)
  document.getElementById("signupForm").addEventListener("submit", handleSignup)
  document.getElementById("logoutBtn").addEventListener("click", handleLogout)

  // Navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", handleNavigation)
  })

  // Modal
  document.getElementById("addExpenseBtn").addEventListener("click", () => openModal("Expense"))
  document.getElementById("addIncomeBtn").addEventListener("click", () => openModal("Income"))
  document.querySelector(".close-modal").addEventListener("click", closeModal)
  document.getElementById("transactionModal").addEventListener("click", function (e) {
    if (e.target === this) closeModal()
  })

  // Transaction Form
  document.getElementById("transactionForm").addEventListener("submit", handleAddTransaction)

  // Month Selector
  document.getElementById("monthSelector").addEventListener("change", function () {
    appState.currentMonth = this.value
    updateDashboard()
  })

  // Budget
  document.getElementById("setBudgetBtn").addEventListener("click", handleSetBudget)
}

function setDefaultDate() {
  const today = new Date()
  document.getElementById("transDate").valueAsDate = today
}

// Auth Tab Switching
function switchAuthTab(e) {
  const tab = e.target.getAttribute("data-tab")
  
  // Update button active state
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active")
  })
  e.target.classList.add("active")
  
  // Update form visibility
  document.querySelectorAll(".auth-form").forEach(form => {
    form.classList.remove("active")
  })
  
  if (tab === "login") {
    document.getElementById("loginForm").classList.add("active")
    // Clear signup form
    document.getElementById("signupForm").reset()
  } else if (tab === "signup") {
    document.getElementById("signupForm").classList.add("active")
    // Clear login form
    document.getElementById("loginForm").reset()
  }
}

// Login/Logout
async function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  if (email && password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          action: 'login',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        showNotification(data.error || 'Login failed', 'error')
        return
      }

      // Store user data and token
      appState.currentUser = data.user
      appState.token = data.token
      document.getElementById("userName").textContent = appState.currentUser.name
      
      // Save to localStorage for persistence
      saveToLocalStorage()
      
      showNotification("Login successful!", "success")
      showDashboard()
      loadTransactions()
    } catch (error) {
      console.error('Login error:', error)
      showNotification('An error occurred during login', 'error')
    }
  }
}

async function handleSignup(e) {
  e.preventDefault()
  const email = document.getElementById("signupEmail").value
  const password = document.getElementById("signupPassword").value
  const confirmPassword = document.getElementById("signupConfirmPassword").value

  // Validate passwords match
  if (password !== confirmPassword) {
    showNotification("Passwords do not match!", "error")
    return
  }

  // Validate password strength
  if (password.length < 6) {
    showNotification("Password must be at least 6 characters long!", "error")
    return
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        action: 'signup',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      showNotification(data.error || 'Signup failed', 'error')
      return
    }

    // Store user data and token
    appState.currentUser = data.user
    appState.token = data.token
    document.getElementById("userName").textContent = appState.currentUser.name
    
    // Save to localStorage for persistence
    saveToLocalStorage()
    
    showNotification("Account created successfully! Welcome!", "success")
    showDashboard()
    loadTransactions()
  } catch (error) {
    console.error('Signup error:', error)
    showNotification('An error occurred during signup', 'error')
  }
}

function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    appState.currentUser = null
    appState.token = null
    appState.transactions = []
    localStorage.removeItem("appState")
    showLoginSection()
    // Clear the forms
    document.getElementById("loginForm").reset()
    document.getElementById("signupForm").reset()
    // Reset to login tab
    document.getElementById("loginTabBtn").classList.add("active")
    document.getElementById("signupTabBtn").classList.remove("active")
    document.getElementById("loginForm").classList.add("active")
    document.getElementById("signupForm").classList.remove("active")
    showNotification("Logged out successfully!", "success")
  }
}

function showLoginSection() {
  document.getElementById("loginSection")?.classList.remove("hidden")
  document.getElementById("dashboardSection")?.classList.add("hidden")
}

function showDashboard() {
  console.log("Dashboard showing...")

  document.getElementById("loginSection")?.classList.add("hidden")

  document.getElementById("dashboardSection")?.classList.remove("hidden")

  updateDashboard()
}

// Navigation
function handleNavigation(e) {
  e.preventDefault()
  const section = this.getAttribute("data-section")

  // Update active nav item
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active")
  })
  this.classList.add("active")

  // Update view
  document.querySelectorAll(".content-view").forEach((view) => {
    view.classList.remove("active")
  })
  document.getElementById(section + "View").classList.add("active")

  // Load view-specific content
  if (section === "expenses") {
    loadExpensesView()
  } else if (section === "income") {
    loadIncomeView()
  } else if (section === "reports") {
    loadReportsView()
  } else if (section === "dashboard") {
    updateDashboard()
  }
}

// Dashboard Update
function updateDashboard() {
  const filtered = filterTransactions()
  calculateTotals(filtered)
  updateTransactionsTable(filtered)
  drawExpenseChart(filtered)
  checkBudgetAlert(filtered)
}

function filterTransactions() {
  if (appState.currentMonth === "all") {
    return appState.transactions
  }
  return appState.transactions.filter((t) => {
    const tMonth = new Date(t.date).toISOString().substring(0, 7)
    return tMonth === appState.currentMonth
  })
}

function calculateTotals(transactions) {
  let totalCost = 0
  let totalIncome = 0

  transactions.forEach((t) => {
    if (t.type === "Expense") {
      totalCost += Number.parseFloat(t.amount)
    } else if (t.type === "Income") {
      totalIncome += Number.parseFloat(t.amount)
    }
  })

  const remaining = totalIncome - totalCost

  document.getElementById("totalCost").textContent = totalCost.toFixed(2)
  document.getElementById("totalIncome").textContent = totalIncome.toFixed(2)
  document.getElementById("remainingBudget").textContent = remaining.toFixed(2)
}

function updateTransactionsTable(transactions) {
  const tbody = document.getElementById("transactionsBody")
  tbody.innerHTML = ""

  transactions
    .slice()
    .reverse()
    .forEach((t) => {
      const row = document.createElement("tr")
      const transactionId = t._id || t.id // Handle both MongoDB _id and regular id
      row.innerHTML = `
            <td>${new Date(t.date).toLocaleDateString()}</td>
            <td><span class="type-${t.type.toLowerCase()}">${t.type}</span></td>
            <td>${t.category}</td>
            <td>${t.description}</td>
            <td>৳ ${Number.parseFloat(t.amount).toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="deleteTransaction('${transactionId}')">Delete</button></td>
        `
      tbody.appendChild(row)
    })
}

function drawExpenseChart(transactions) {
  const canvas = document.getElementById("expenseChart")
  const ctx = canvas.getContext("2d")

  // Calculate expense categories
  const categories = {}
  transactions.forEach((t) => {
    if (t.type === "Expense") {
      categories[t.category] = (categories[t.category] || 0) + Number.parseFloat(t.amount)
    }
  })

  const colors = [
    "#4285F4",
    "#EA4335",
    "#FBBC04",
    "#34A853",
    "#FA7B17",
    "#FF6D00",
    "#AB47BC",
    "#00ACC1",
    "#E91E63",
    "#9C27B0",
  ]

  const labels = Object.keys(categories)
  const data = Object.values(categories)
  const total = data.reduce((a, b) => a + b, 0)

  // Draw pie chart
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = 100

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let currentAngle = 0
  data.forEach((value, index) => {
    const sliceAngle = (value / total) * 2 * Math.PI

    // Draw slice
    ctx.fillStyle = colors[index % colors.length]
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
    ctx.closePath()
    ctx.fill()

    // Draw label
    const labelAngle = currentAngle + sliceAngle / 2
    const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7)
    const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7)
    const percentage = ((value / total) * 100).toFixed(1)

    ctx.fillStyle = "white"
    ctx.font = "bold 12px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(percentage + "%", labelX, labelY)

    currentAngle += sliceAngle
  })

  // Update legend
  const legend = document.getElementById("chartLegend")
  legend.innerHTML = ""
  labels.forEach((label, index) => {
    const legendItem = document.createElement("div")
    legendItem.className = "legend-item"
    legendItem.innerHTML = `
            <div class="legend-color" style="background: ${colors[index % colors.length]}"></div>
            <span>${label} - ${((data[index] / total) * 100).toFixed(1)}%</span>
        `
    legend.appendChild(legendItem)
  })
}

function checkBudgetAlert(transactions) {
  const expenses = transactions.filter((t) => t.type === "Expense")
  const totalExpense = expenses.reduce((sum, t) => sum + Number.parseFloat(t.amount), 0)
  const percentage = (totalExpense / appState.budget) * 100

  if (percentage >= 50 && percentage < 100) {
    showNotification(`Warning: You've spent ${percentage.toFixed(1)}% of your budget!`, "warning")
  } else if (percentage >= 100) {
    showNotification("Alert: You have exceeded your budget!", "error")
  }
}

// Modal Functions
function openModal(type) {
  document.getElementById("modalTitle").textContent = `Add ${type}`
  document.getElementById("transactionModal").classList.add("active")
}

function closeModal() {
  document.getElementById("transactionModal").classList.remove("active")
  document.getElementById("transactionForm").reset()
  setDefaultDate()
}

async function handleAddTransaction(e) {
  e.preventDefault()

  const date = document.getElementById("transDate").value
  const category = document.getElementById("transCategory").value
  const description = document.getElementById("transDescription").value
  const amount = document.getElementById("transAmount").value

  const type = ["Tuition", "Part-time Job", "Scholarship"].includes(category)
    ? "Income"
    : "Expense"

  try {
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.token}`,
      },
      body: JSON.stringify({
        date,
        category,
        description,
        amount,
        type,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      showNotification(data.error || 'Failed to add transaction', 'error')
      return
    }

    closeModal()
    loadTransactions() // Reload from database
    showNotification("Transaction added successfully!", "success")
  } catch (error) {
    console.error('Add transaction error:', error)
    showNotification('An error occurred while adding the transaction', 'error')
  }
}

async function deleteTransaction(transactionId) {
  if (confirm("Are you sure you want to delete this transaction?")) {
    try {
      const response = await fetch(`${API_BASE_URL}/transactions?id=${transactionId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${appState.token}`,
        },
      })

      if (!response.ok) {
        showNotification('Failed to delete transaction', 'error')
        return
      }

      loadTransactions() // Reload from database
      showNotification("Transaction deleted!", "success")
    } catch (error) {
      console.error('Delete transaction error:', error)
      showNotification('An error occurred while deleting the transaction', 'error')
    }
  }
}

// Views
function loadExpensesView() {
  const expenses = appState.transactions.filter((t) => t.type === "Expense")
  const container = document.getElementById("expensesList")
  container.innerHTML = ""

  expenses.forEach((expense) => {
    const card = document.createElement("div")
    card.className = "expense-card"
    const transactionId = expense._id || expense.id
    card.innerHTML = `
            <h3>${expense.category}</h3>
            <p>${expense.description}</p>
            <p>Date: ${new Date(expense.date).toLocaleDateString()}</p>
            <div class="expense-amount">৳ ${Number.parseFloat(expense.amount).toFixed(2)}</div>
            <button class="btn btn-danger" style="margin-top: 10px;" onclick="deleteTransaction('${transactionId}')">Delete</button>
        `
    container.appendChild(card)
  })
}

function loadIncomeView() {
  const income = appState.transactions.filter((t) => t.type === "Income")
  const container = document.getElementById("incomeList")
  container.innerHTML = ""

  income.forEach((inc) => {
    const card = document.createElement("div")
    card.className = "income-card"
    const transactionId = inc._id || inc.id
    card.innerHTML = `
            <h3>${inc.category}</h3>
            <p>${inc.description}</p>
            <p>Date: ${new Date(inc.date).toLocaleDateString()}</p>
            <div class="income-amount">৳ ${Number.parseFloat(inc.amount).toFixed(2)}</div>
            <button class="btn btn-danger" style="margin-top: 10px;" onclick="deleteTransaction('${transactionId}')">Delete</button>
        `
    container.appendChild(card)
  })
}

function loadReportsView() {
  const filtered = filterTransactions()
  const container = document.getElementById("reportContent")

  let totalExpense = 0
  let totalIncome = 0

  filtered.forEach((t) => {
    if (t.type === "Expense") totalExpense += Number.parseFloat(t.amount)
    else totalIncome += Number.parseFloat(t.amount)
  })

  const categories = {}
  filtered
    .filter((t) => t.type === "Expense")
    .forEach((t) => {
      categories[t.category] = (categories[t.category] || 0) + Number.parseFloat(t.amount)
    })

  container.innerHTML = `
        <h3>Summary</h3>
        <div class="report-item">
            <span>Total Income:</span>
            <strong>৳ ${totalIncome.toFixed(2)}</strong>
        </div>
        <div class="report-item">
            <span>Total Expense:</span>
            <strong>৳ ${totalExpense.toFixed(2)}</strong>
        </div>
        <div class="report-item">
            <span>Net Balance:</span>
            <strong>৳ ${(totalIncome - totalExpense).toFixed(2)}</strong>
        </div>
        <h3 style="margin-top: 20px;">Expense Breakdown</h3>
    `

  Object.entries(categories).forEach(([category, amount]) => {
    const percentage = ((amount / totalExpense) * 100).toFixed(1)
    const item = document.createElement("div")
    item.className = "report-item"
    item.innerHTML = `
            <span>${category}:</span>
            <strong>৳ ${amount.toFixed(2)} (${percentage}%)</strong>
        `
    container.appendChild(item)
  })
}

async function handleSetBudget() {
  const amount = Number.parseFloat(document.getElementById("budgetAmount").value)
  if (amount > 0) {
    try {
      const response = await fetch(`${API_BASE_URL}/budget`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${appState.token}`,
        },
        body: JSON.stringify({ amount }),
      })

      const data = await response.json()

      if (!response.ok) {
        showNotification(data.error || 'Failed to set budget', 'error')
        return
      }

      appState.budget = amount
      document.getElementById("budgetValue").textContent = `৳ ${amount.toFixed(2)}`
      document.getElementById("budgetAmount").value = ""
      showNotification("Budget set successfully!", "success")
    } catch (error) {
      console.error('Set budget error:', error)
      showNotification('An error occurred while setting the budget', 'error')
    }
  }
}

// Notifications
function showNotification(message, type) {
  const notification = document.getElementById("notification")
  notification.textContent = message
  notification.className = `notification show ${type}`
  setTimeout(() => {
    notification.classList.remove("show")
  }, 3000)
}

// Local Storage
function saveToLocalStorage() {
  // Only save user and token, not transactions (those come from DB)
  const toSave = {
    currentUser: appState.currentUser,
    token: appState.token,
  }
  localStorage.setItem("appState", JSON.stringify(toSave))
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem("appState")
  if (saved) {
    const data = JSON.parse(saved)
    appState.currentUser = data.currentUser
    appState.token = data.token
  }
}

// Load transactions from database
async function loadTransactions() {
  if (!appState.token) return

  try {
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${appState.token}`,
      },
    })

    if (!response.ok) {
      console.error('Failed to load transactions')
      return
    }

    const data = await response.json()
    
    // Convert date strings to proper format for display
    appState.transactions = data.map(t => ({
      ...t,
      date: new Date(t.date).toISOString().split('T')[0],
    }))

    // Load budget too
    await loadBudget()
    
    updateDashboard()
  } catch (error) {
    console.error('Load transactions error:', error)
  }
}

// Load budget from database
async function loadBudget() {
  if (!appState.token) return

  try {
    const response = await fetch(`${API_BASE_URL}/budget`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${appState.token}`,
      },
    })

    if (!response.ok) {
      console.error('Failed to load budget')
      return
    }

    const data = await response.json()
    appState.budget = data.budget || 5000
    document.getElementById("budgetValue").textContent = `৳ ${appState.budget.toFixed(2)}`
  } catch (error) {
    console.error('Load budget error:', error)
  }
}
// load budget edited


