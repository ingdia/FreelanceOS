import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function PaymentsPage() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { state } = context;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <div className="space-y-4">
        {state.payments.map((payment, index) => (
          <div key={index} className="p-4 border rounded-md bg-white shadow-sm">
            <p>Project ID: {payment.projectId}</p>
            <p>Amount: ${payment.amount}</p>
            <p>Date: {new Date(payment.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
