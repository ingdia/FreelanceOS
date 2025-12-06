import type { AppState } from "../types/appState";
import type { Project } from "../types/project";
import type { Payment } from "../types/payment";

export type Action =
  | { type: "CREATE_PROJECT"; payload: { newProject: Project } }
  | { type: "MARK_PROJECT_PAID"; payload: { projectId: string } }
  | { type: "ADD_PAYMENT"; payload: Payment };

export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "CREATE_PROJECT": {
      return {
        ...state,
        projects: [...state.projects, action.payload.newProject],
      };
    }

    case "MARK_PROJECT_PAID": {
      const { projectId } = action.payload;

      // Update project paymentStatus
      const updatedProjects = state.projects.map((p) =>
        p.id === projectId ? { ...p, paymentStatus: "paid" } : p
      );

      // Create a payment record using project's budget as amount (real world you'd ask)
      const project = state.projects.find((p) => p.id === projectId);
      const newPayment: Payment | null = project
        ? {
            id: `pay_${Date.now()}`,
            projectId,
            amount: project.budget,
            date: new Date().toISOString(),
          }
        : null;

      return {
        ...state,
        projects: updatedProjects,
        payments: newPayment ? [...state.payments, newPayment] : state.payments,
      };
    }

    case "ADD_PAYMENT": {
      // mark project paid if payment amount covers the budget (simple)
      const projectIndex = state.projects.findIndex(p => p.id === action.payload.projectId);
      let projects = state.projects;
      if (projectIndex >= 0) {
        const p = state.projects[projectIndex];
        const updated = { ...p };
        // If amount >= budget, mark paid
        if (action.payload.amount >= p.budget) updated.paymentStatus = "paid";
        projects = [
          ...state.projects.slice(0, projectIndex),
          updated,
          ...state.projects.slice(projectIndex + 1),
        ];
      }

      return {
        ...state,
        payments: [...state.payments, action.payload],
        projects,
      };
    }

    default:
      return state;
  }
}
