import type { Project } from "../types/project";

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <div className="space-x-4 grid grid-cols-1 md:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-4 border-0 rounded-md bg-white shadow-2xl"
        >
          <h3 className="font-bold text-lg">{project.title}</h3>

          <p>Status: {project.status}</p>
          <p>Amount: ${project.amount}</p>

          <p className={`font-semibold mt-2 ${project.isPaid ? "text-green-600" : "text-red-600"}`}>
            {project.isPaid ? "Paid" : "Unpaid"}
          </p>
        </div>
      ))}
    </div>
  );
}
