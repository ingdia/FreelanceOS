import type { Payment } from "../types/payment";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Props {
  payments: Payment[];
}

export default function PaymentList({ payments }: Props) {
  const context = useContext(AppContext);
  if (!context) return null;
  const { state } = context;

  const getProjectName = (projectId: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    return project ? project.title : "Project not found";
  };

  const getClientName = (projectId: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    if (!project) return "Client not found";
    const client = state.clients.find((c) => c.id === project.clientId);
    return client ? client.name : "Client not found";
  };

  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.id} className="p-4 border rounded-md bg-white shadow-sm">
          <p><strong>Project:</strong> {getProjectName(payment.projectId)}</p>
          <p><strong>Client:</strong> {getClientName(payment.projectId)}</p>
          <p><strong>Amount:</strong> ${payment.amount}</p>
          <p><strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
