import React, { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";

import { reducer } from "./reducer";
import type { Action } from "./reducer";

import type { AppState } from "../types/appState";
import { clients as demoClients } from "../data/client";
import { projects as demoProjects } from "../data/projects";
import { payments as demoPayments } from "../data/payments";

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<Action>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    clients: demoClients,
    projects: demoProjects,
    payments: demoPayments
  });

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
