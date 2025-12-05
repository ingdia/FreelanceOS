import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  return (
    <div className=" bg-gray-200 dark:bg-gray-600 min-h-screen pt-4 px-20 font-serif">
      <h1 className="text-2xl text-purple-600 dark:text-purple-300 mb-4">Projects</h1>

      <ProjectList projects={projects} />
    </div>
  );
}
