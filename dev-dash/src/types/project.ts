export type ProjectStatus = "pending" | "in-progress" | "completed" | "paused";
export type PaymentState = "paid" | "unpaid";
export type Priority = "low" | "medium" | "high";

export interface Project {
  id: string;
  clientId: string;
  title: string;
  description?: string;

  budget: number;
  paymentStatus: PaymentState;

  status: ProjectStatus;
  priority: Priority;

  progress: number; 

  startDate: string;
  dueDate: string;  
  updatedAt?: string; 

  tags?: string[];
  invoiceId?: string;
  attachments?: string[];
}
