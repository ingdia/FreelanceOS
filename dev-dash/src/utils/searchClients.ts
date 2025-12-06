import type { Client } from "../types/client";
import type { Project } from "../types/project";

export const findClientByIdSafely = (clients: Client[], clientId: string): Client | undefined => {
  return clients.find(client => client.id === clientId);
};

export const searchClientsByName = (clients: Client[], searchTerm: string): Client[] => {
  return clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const searchProjectsByName = (projects: Project[], searchTerm: string): Project[] => {
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};