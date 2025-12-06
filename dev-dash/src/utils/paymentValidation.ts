import type { Payment } from "../types/payment";

export const recordNewPaymentWithValidation = (
  projectId: string,
  amount: number,
  date?: string
): Payment | null => {
  // Validation
  if (!projectId || projectId.trim() === "") {
    console.error("Project ID is required");
    return null;
  }
  
  if (amount <= 0) {
    console.error("Amount must be greater than 0");
    return null;
  }

  return {
    projectId: projectId.trim(),
    amount,
    date: date || new Date().toISOString()
  };
};