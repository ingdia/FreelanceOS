import React, { createContext, useReducer } from "react";
import { appReducer } from "./reducer";
import type { Action } from "./reducer";
import type { AppState } from "../types/appState";

import { clients } from "../data/client";
import { projects } from "../data/projects";
import { payments } from "../data/payments";

const initialState: AppState = {
  clients,
  projects,
  payments,
};

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
