import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const context = useContext(AppContext);
  if (!context) return null; 
  const { state, dispatch } = context;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <ProjectList projects={state.projects} dispatch={dispatch} />
    </div>
  );
}
