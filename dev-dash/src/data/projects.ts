import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "p1",
    clientId: "c1",
    title: "Landing Page",
    description: "A modern marketing landing page for Diane Corp.",
    budget: 1200,
    paymentStatus: "unpaid",
    status: "in-progress",
    priority: "high",
    progress: 40,
    startDate: "2025-11-01",
    dueDate: "2025-11-10",
    updatedAt: "2025-11-05",
    tags: ["frontend", "UI/UX"],
  },
  {
    id: "p2",
    clientId: "c2",
    title: "Mobile App",
    description: "Cross-platform mobile app for ecommerce management.",
    budget: 3500,
    paymentStatus: "paid",
    status: "pending",
    priority: "medium",
    progress: 0,
    startDate: "2025-12-01",
    dueDate: "2025-12-30",
    updatedAt: "2025-12-01",
    tags: ["mobile", "react-native"],
    invoiceId: "INV-42",
  }
];
