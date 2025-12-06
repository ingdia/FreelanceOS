import type { Project } from "../types/project";

export const countPaidVsUnpaidProjects = (projects: Project[]): { paid: number; unpaid: number } => {
  return projects.reduce(
    (acc, project) => {
      if (project.paymentStatus === "paid") {
        acc.paid++;
      } else {
        acc.unpaid++;
      }
      return acc;
    },
    { paid: 0, unpaid: 0 }
  );
};