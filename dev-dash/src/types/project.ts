export type ProjectStatus = "pending" | "in-progress" | "completed";
export type PaymentState = "paid" | "unpaid";

export interface Project {
  id: string;
  clientId: string;
  title: string;
  budget: number;
  status: ProjectStatus;
  paymentStatus: PaymentState;
}
