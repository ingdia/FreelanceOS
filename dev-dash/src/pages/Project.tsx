import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProjectList from "../components/ProjectList";
import CreateProjectModal from "../components/CreateProjectModal";


export default function ProjectsPage() {
  const context = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"none" | "date" | "budget" | "priority">("none");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const displayed = useMemo(() => {
    if (!context) return [];
    let list = [...context.state.projects];

    switch (activeFilter) {
      case "highPriority":
        list = list.filter((p) => p.priority === "high");
        break;
      case "unpaid":
        list = list.filter((p) => p.paymentStatus === "unpaid");
        break;
      case "dueToday":
        list = list.filter((p) => p.dueDate === today);
        break;
      case "overdue":
        list = list.filter((p) => p.dueDate < today && p.status !== "completed");
        break;
      case "completed":
        list = list.filter((p) => p.status === "completed");
        break;
      case "inProgress":
        list = list.filter((p) => p.status === "in-progress");
        break;
      default:
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.clientId.toLowerCase().includes(q)
      );
    }

    if (sort === "date") {
      list.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    } else if (sort === "budget") {
      list.sort((a, b) => b.budget - a.budget);
    } else if (sort === "priority") {
      const level = { high: 3, medium: 2, low: 1 };
      list.sort((a, b) => level[b.priority] - level[a.priority]);
    }

    return list;
  }, [context, activeFilter, search, sort, today]);

  if (!context) return null;
  const { state, dispatch } = context;

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "highPriority", label: "High Priority" },
    { key: "dueToday", label: "Due Today" },
    { key: "overdue", label: "Overdue" },
    { key: "unpaid", label: "Unpaid" },
    { key: "completed", label: "Completed" },
    { key: "inProgress", label: "In Progress" },
  ];

  const clientOptions = state.clients.map((c) => ({ id: c.id, name: c.name }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Projects
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
            >
              + New Project
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Manage and track all your projects in one place
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                placeholder="Search projects by title, description, tags, or client..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all cursor-pointer"
              value={sort}
              onChange={(e) => setSort(e.target.value as "none" | "date" | "budget" | "priority")}
            >
              <option value="none">Sort by</option>
              <option value="date">Due Date</option>
              <option value="budget">Budget</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="flex gap-2 overflow-x-auto mt-4 pb-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.key
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className=" dark:bg-gray-800 rounded-lg shadow-sm  p-6">
          {displayed.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-2">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {search || activeFilter !== "all" 
                  ? "Try adjusting your filters or search query"
                  : "Get started by creating your first project"}
              </p>
            </div>
          ) : (
            <ProjectList projects={displayed} dispatch={dispatch} />
          )}
        </div>
      </div>

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dispatch={dispatch}
        clients={clientOptions}
      />
    </div>
  );
}