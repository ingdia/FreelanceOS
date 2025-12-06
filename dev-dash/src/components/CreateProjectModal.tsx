import { useState } from "react";
import type { Dispatch } from "react";
import type { Action } from "../context/reducer";
import type { Project } from "../types/project";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  dispatch: Dispatch<Action>;
  clients?: { id: string; name: string }[]; // optional to show names in select
}

export default function CreateProjectModal({ isOpen, onClose, dispatch, clients }: Props) {
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState<number | "">("");
  const [clientId, setClientId] = useState(clients?.[0]?.id ?? "");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Project["priority"]>("medium");
  const [startDate, setStartDate] = useState("");
  const [description, setDescription] = useState("");

  const id = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `p_${Date.now()}`;

  const handleSubmit = () => {
    if (!title || !budget || !clientId || !dueDate || !startDate) {
      alert("Please fill title, budget, client, start date and due date");
      return;
    }

    const newProject: Project = {
      id,
      title,
      clientId,
      description,
      budget: Number(budget),
      paymentStatus: "unpaid",
      status: "pending",
      priority,
      progress: 0,
      startDate,
      dueDate,
      updatedAt: new Date().toISOString(),
    };

    dispatch({ type: "CREATE_PROJECT", payload: { newProject } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Create Project</h2>

        <div className="grid grid-cols-1 gap-3">
          <input
            className="p-2 border rounded"
            placeholder="Project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="p-2 border rounded"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              className="p-2 border rounded"
              placeholder="Budget"
              value={budget === "" ? "" : String(budget)}
              onChange={(e) => setBudget(e.target.value === "" ? "" : Number(e.target.value))}
            />

            <select
              className="p-2 border rounded"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Project["priority"])}
            >
              <option value="low">Low priority</option>
              <option value="medium">Medium priority</option>
              <option value="high">High priority</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              className="p-2 border rounded"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="p-2 border rounded"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <select
            className="p-2 border rounded"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          >
            {clients?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
            {!clients && <option value="">Select client id (like c1)</option>}
          </select>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded bg-purple-700 text-white">Create</button>
        </div>
      </div>
    </div>
  );
}
