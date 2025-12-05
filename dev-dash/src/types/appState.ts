import type { Client } from "./client";
import type { Project } from "./project";
import  type { Payment } from "./payment";

export interface AppState {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}
