import type  { Project } from "../types/project";

export const projects: Project[] = [
  { id: "p1", clientId: "c1", title: "Landing Page", budget: 1200, status: "in-progress", paymentStatus: "unpaid" },
  { id: "p2", clientId: "c2", title: "Mobile App", budget: 3500, status: "pending", paymentStatus: "paid" }
];
