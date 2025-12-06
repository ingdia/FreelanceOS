import type { Project } from "../types/project";
import type { Dispatch } from "react";
import type { Action } from "../context/reducer";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Props {
  projects: Project[];
  dispatch: Dispatch<Action>;
}

export default function ProjectList({ projects, dispatch }: Props) {
  const ctx = useContext(AppContext);
  if (!ctx) return null;

  const getClientName = (clientId: string) => {
    const c = ctx.state.clients.find((c) => c.id === clientId);
    return c ? c.name : "Unknown Client";
  };

  const markAsPaid = (id: string) => {
    dispatch({ type: "MARK_PROJECT_PAID", payload: { projectId: id } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((p) => (
        <div
          key={p.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow"
        >
          
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {getClientName(p.clientId)}
              </p>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-xs font-medium ml-2 ${
              p.priority === "high" 
                ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                : p.priority === "medium"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            }`}>
              {p.priority}
            </span>
          </div>

          {p.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {p.description}
            </p>
          )}

          <div className="flex items-center gap-2 mb-4">
            <span className={`px-2.5 py-1 rounded text-xs font-medium ${
              p.status === "completed"
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : p.status === "in-progress"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}>
              {p.status}
            </span>
            
            {p.tags && p.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Budget</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${p.budget.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Start</span>
              <span className="text-gray-900 dark:text-white">
                {new Date(p.startDate).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Due</span>
              <span className="text-gray-900 dark:text-white">
                {new Date(p.dueDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="font-medium text-gray-900 dark:text-white">{p.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="h-2 bg-purple-600 rounded-full"
                style={{ width: `${p.progress}%` }}
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span className={`text-sm font-medium ${
              p.paymentStatus === "paid"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}>
              {p.paymentStatus === "paid" ? "✓ Paid" : "● Unpaid"}
            </span>

            {p.paymentStatus === "unpaid" ? (
              <button
                onClick={() => markAsPaid(p.id)}
                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md"
              >
                Mark Paid
              </button>
            ) : (
              p.invoiceId && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Invoice #{p.invoiceId}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}