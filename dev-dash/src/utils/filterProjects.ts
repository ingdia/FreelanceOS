import type { Project, ProjectStatus, PaymentState } from "../types/project";

export const filterProjectsByStatus = (projects: Project[], status: ProjectStatus): Project[] => {
  return projects.filter(project => project.status === status);
};

export const filterProjectsByPaymentState = (projects: Project[], paymentStatus: PaymentState): Project[] => {
  return projects.filter(project => project.paymentStatus === paymentStatus);
};