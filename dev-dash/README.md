# Folder structure
dev-dash/
├─ public/                     
│   ├─ index.html
│   └─ favicon.ico
│
├─ src/
│   ├─ assets/                 
│   │   └─ logo.png            # Images, icons, logos
│   │
│   ├─ components/             
│   │   ├─ shared/             # Components used throughout the app
│   │   │   ├─ Navbar.tsx
│   │   │   ├─ Sidebar.tsx
│   │   │   └─ Footer.tsx
│   │   ├─ ClientCard.tsx      # Reusable card for clients
│   │   ├─ ProjectList.tsx     # Reusable project list
│   │   └─ DashboardStats.tsx  # Dashboard summary component
│   │
│   ├─ context/                
│   │   ├─ AppContext.tsx      # Context provider setup
│   │   └─ reducer.ts          # Reducer + action types
│   │
│   ├─ data/                 
│   │   ├─ clients.ts           # Mock clients
│   │   ├─ projects.ts          # Mock projects
│   │   └─ payments.ts          # Mock payments
│   │
│   ├─ types/                
│   │   ├─ client.ts           # TypeScript model for Client
│   │   ├─ project.ts          # TypeScript model for Project
│   │   └─ payment.ts          # TypeScript model for Payment
│   │
│   ├─ utils/                
│   │   ├─ countPayments.ts     # Count paid/unpaid projects
│   │   ├─ filterProjects.ts    # Filter projects by status/payment
│   │   └─ searchClients.ts     # Search clients by name
│   │
│   ├─ pages/                
│   │   └─ Dashboard.tsx        # Main dashboard page
│   │
│   ├─ App.tsx                 # Main app layout (includes Navbar/Sidebar)
│   └─ index.tsx               # React entry point
│
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js          # Optional if using Tailwind CSS
└─ README.md
