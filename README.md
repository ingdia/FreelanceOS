#  FreelancerOS - Freelance Management Dashboard

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</div>

<br />

> A modern, type-safe freelance management dashboard built with React and TypeScript. Manage clients, projects, and payments with full type safety and an intuitive interface.

##  Key Features

###  Core Functionality
-  **Client Management** - Track client information with optional email fields
-  **Project Tracking** - Monitor project status, budgets, and payment states
-  **Payment Records** - View and manage payment history with ISO date formatting
-  **Mark as Paid** - Interactive button to update project payment status
-  **Real-time Statistics** - Dashboard with paid/unpaid project counts

###  TypeScript Excellence
-  **Discriminated Union Actions** - Type-safe reducer actions
-  **Optional Properties** - Proper handling of nullable fields
-  **Type Narrowing** - Safe data access without runtime errors
-  **Interface Definitions** - Complete type coverage for all data models
-  **Generic Components** - Reusable, type-safe React components

###  Modern UI/UX
-  **Dark Mode Support** - Seamless theme switching with no flash
-  **Responsive Design** - Mobile-first approach with Tailwind CSS
-  **Gradient Cards** - Beautiful gray-purple gradient statistics
-  **Lucide Icons** - Modern, consistent iconography
-  **Smooth Animations** - Hover effects and transitions

##  Project Architecture

```
dev-dash/
├── src/
│   ├── assets/              # Static assets
│   │   └── images/          # Image files
│   ├── components/          # Reusable UI components
│   │   ├── ClientCard.tsx           # Client information display
│   │   ├── CreateProjectModal.tsx   # Project creation modal
│   │   ├── DashboardStats.tsx       # Statistics cards with icons
│   │   ├── PaymentList.tsx          # Payment records list
│   │   ├── ProjectList.tsx          # Project list with actions
│   │   └── ThemeSwitc.tsx           # Dark/light mode toggle
│   ├── context/             # Global state management
│   │   ├── AppContext.tsx           # App state provider
│   │   ├── reducer.ts               # Type-safe reducer with actions
│   │   └── ThemeContext.tsx         # Theme state provider
│   ├── data/                # Mock data for development
│   │   ├── client.ts                # Sample client data
│   │   ├── projects.ts              # Sample project data
│   │   └── payments.ts              # Sample payment data
│   ├── pages/               # Route-level components
│   │   ├── Client.tsx               # Client list page
│   │   ├── OverView.tsx             # Dashboard home page
│   │   ├── Payment.tsx              # Payment management page
│   │   └── Project.tsx              # Project management page
│   ├── shared/              # Shared layout components
│   │   ├── Footer.tsx               # App footer with branding
│   │   ├── Navbar.tsx               # Sticky navigation bar
│   │   └── Sidebar.tsx              # Sidebar (placeholder)
│   ├── types/               # TypeScript type definitions
│   │   ├── appState.ts              # Global app state interface
│   │   ├── client.ts                # Client type definition
│   │   ├── payment.ts               # Payment type definition
│   │   └── project.ts               # Project type definition
│   ├── utils/               # Utility functions (all typed)
│   │   ├── countPayments.ts         # Count paid vs unpaid
│   │   ├── filterProjects.ts        # Filter by status/payment
│   │   ├── getClientById.ts         # Safe client lookup
│   │   ├── paymentValidation.ts     # Payment validation logic
│   │   └── searchClients.ts         # Search functionality
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template with dark mode script
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

##  Getting Started

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

All utility functions are fully typed with TypeScript:

- **countPaidVsUnpaidProjects()** - Provides insight into payment status
- **findClientByIdSafely()** - Safe client lookup with type narrowing  
- **filterProjectsByStatus()** - Filter projects by completion status
- **filterProjectsByPaymentState()** - Filter by payment status
- **searchClientsByName()** - Search functionality for clients
- **searchProjectsByName()** - Search functionality for projects
- **recordNewPaymentWithValidation()** - Payment validation utility
- **Conditional styling** - Visual status indicators

##  Technologies Used

| Technology | Purpose |
|------------|----------|
| **React 19** | Modern UI library with hooks |
| **TypeScript 5.9** | Type safety and better DX |
| **Tailwind CSS 4** | Utility-first styling |
| **Vite 7** | Lightning-fast build tool |
| **React Router** | Client-side routing |
| **Lucide React** | Beautiful icon library |
| **Context API + useReducer** | Global state management |

##  Screenshots

### Light Mode

#### Dashboard Overview
<img width="1366" height="1011" alt="screencapture-freelance-os-mocha-vercel-app-2025-12-06-12_13_05" src="https://github.com/user-attachments/assets/0fa9236d-d6d3-42d6-bce3-e76482e35d79" />)

*Main dashboard showing statistics, recent projects, and quick actions*

#### Projects Page
<img width="1366" height="948" alt="screencapture-freelance-os-mocha-vercel-app-project-2025-12-06-12_13_33" src="https://github.com/user-attachments/assets/a98ebdfb-8fe0-4ebb-a35b-89827a3847ab" />

*Project management with filtering, sorting, and mark-as-paid functionality*

#### Clients Page
<img width="1366" height="806" alt="screencapture-freelance-os-mocha-vercel-app-client-2025-12-06-12_13_45" src="https://github.com/user-attachments/assets/bfb5c7d1-8b87-456a-a9f4-7e3159403082" />

*Client list with contact information and optional email handling*

#### Payments Page
![Payments Page - Light Mode]<img width="1366" height="806" alt="screencapture-freelance-os-mocha-vercel-app-payment-2025-12-06-12_13_53" src="https://github.com/user-attachments/assets/785c22b1-60b1-4962-940c-e1a0b53786ca" />
*Payment records with project details and transaction history*

### Dark Mode

#### Dashboard Overview - Dark Mode
<img width="1366" height="1011" alt="screencapture-freelance-os-mocha-vercel-app-2025-12-06-12_14_32" src="https://github.com/user-attachments/assets/1eadd92b-ee6f-480c-9f6f-d2c9e797ee17" />

*Dashboard with seamless dark mode support*

#### Projects Page - Dark Mode
<img width="1366" height="948" alt="screencapture-freelance-os-mocha-vercel-app-project-2025-12-06-12_14_57" src="https://github.com/user-attachments/assets/578c7c2a-576c-41d1-a489-58092b608df8" />

*Project management in dark mode with enhanced visibility*

##  Live Demo

[View Live Demo](https://freelance-os-mocha.vercel.app/)

