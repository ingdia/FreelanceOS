import type { AppState } from "../types/appState";
import type { Project } from "../types/project";
import type { Payment } from "../types/payment";

export type Action =
  | { type: "MARK_PROJECT_PAID"; payload: { projectId: string } }
  | { type: "ADD_PAYMENT"; payload: Payment }
  | { type: "ADD_PROJECT"; payload: Project };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "MARK_PROJECT_PAID":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId
            ? { ...p, paymentStatus: "paid" }
            : p
        ),
      };

    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    default:
      return state;
  }
}
