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
    return project ? project.title : "Unknown Project";
  };

  const getClientName = (projectId: string) => {
    const project = state.projects.find((p) => p.id === projectId);
    if (!project) return "Unknown Client";
    const client = state.clients.find((c) => c.id === project.clientId);
    return client ? client.name : "Unknown Client";
  };

  const sortedPayments = [...payments].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-3">
      {sortedPayments.map((payment) => (
        <div 
          key={payment.id} 
          className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {getProjectName(payment.projectId)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {getClientName(payment.projectId)}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                ${payment.amount.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {new Date(payment.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}