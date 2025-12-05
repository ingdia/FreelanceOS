import type { Project } from "../types/project";
import type { Dispatch } from "react";
import type { Action } from "../context/reducer";

interface Props {
  projects: Project[];
  dispatch: Dispatch<Action>;
}

export default function ProjectList({ projects, dispatch }: Props) {
  const markAsPaid = (id: string) => {
    dispatch({ type: "MARK_PROJECT_PAID", payload: { projectId: id } });
  };

  return (
    <div className="space-y-4">
      {projects.map((p) => (
        <div
          key={p.id}
          className="p-4 border rounded-md bg-white shadow-sm"
        >
          <h3 className="font-bold text-lg">{p.title}</h3>

          <p>Status: {p.status}</p>
          <p>Amount: ${p.budget}</p>

          <p className={`font-semibold mt-2 ${p.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
            {p.paymentStatus === "paid" ? "Paid" : "Unpaid"}
          </p>

          {p.paymentStatus === "unpaid" && (
            <button
              onClick={() => markAsPaid(p.id)}
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
            >
              Mark as Paid
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
