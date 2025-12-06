# Freelance Dashboard (React + TypeScript)

A type-safe freelance management dashboard built with React and TypeScript that allows users to view and manage clients, projects, and payment information.

##  Technologies Used

- **React 19** - Modern React with hooks
- **TypeScript** - Full type safety and better developer experience  
- **Context API + useReducer** - Global state management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing

##  Main Features

- **Type-safe React components** with fully typed props and state
- **Context API + useReducer** system with discriminated union actions
- **Client, Project, and Payment data models** with TypeScript interfaces
- **Interactive dashboard** with ability to mark projects as paid
- **Real-time statistics** showing paid/unpaid project counts
- **Responsive design** with Tailwind CSS
- **Type narrowing** for safe data access and error handling

##  Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ClientCard.tsx   # Displays client information
│   ├── ProjectList.tsx  # Lists projects with status
│   └── DashboardStats.tsx # Summary statistics
├── context/             # State management
│   ├── AppContext.tsx   # Context provider
│   └── reducer.ts       # Reducer with discriminated unions
├── types/               # TypeScript interfaces
│   ├── client.ts        # Client data model
│   ├── project.ts       # Project data model
│   ├── payment.ts       # Payment data model
│   └── appState.ts      # Application state
├── utils/               # Utility functions
│   ├── countPayments.ts # Count paid/unpaid projects
│   ├── filterProjects.ts # Filter projects by status
│   ├── searchClients.ts # Search and find clients
│   └── paymentValidation.ts # Payment validation
├── data/                # Mock data
│   ├── client.ts        # Sample clients
│   ├── projects.ts      # Sample projects
│   └── payments.ts      # Sample payments
└── pages/               # Page components
    ├── OverView.tsx     # Main dashboard page
    ├── Client.tsx       # Client list page
    ├── Project.tsx      # Project list page
    └── Payment.tsx      # Payment management page
```

##  Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ingdia/FreelanceOS.git
   cd FreelanceOS/dev-dash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```


##  Dashboard Sections

### Client List
- Display client name, country, and optional email
- Handle missing email addresses gracefully
- Navigate to `/client` to view all clients

### Project List  
- Show project title, linked client name, status, and payment status
- Interactive "Mark as Paid" button for unpaid projects
- Color-coded status indicators
- Navigate to `/project` to view all projects

### Payment Management
- Display payment records with project ID, amount, and date
- Handle missing or inconsistent data safely
- Navigate to `/payment` to view all payments

### Dashboard Statistics
- Real-time counts of total clients, projects, paid/unpaid projects
- Visual statistics cards with color coding

##  Utility Functions

- **countPaidVsUnpaidProjects()** - Provides insight into payment status
- **findClientByIdSafely()** - Safe client lookup with type narrowing  
- **filterProjectsByStatus()** - Filter projects by completion status
- **filterProjectsByPaymentState()** - Filter by payment status
- **searchClientsByName()** - Search functionality for clients
- **searchProjectsByName()** - Search functionality for projects
- **recordNewPaymentWithValidation()** - Payment validation utility
- **Conditional styling** - Visual status indicators

##  Live Demo

[View Live Demo](https://your-deployment-url.vercel.app)

