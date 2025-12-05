import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PaymentList from "../components/PaymentList";

export default function PaymentsPage() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { state } = context;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <PaymentList payments={state.payments} />
    </div>
  );
}
