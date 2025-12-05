import ClientCard from "../components/ClientCard";
import { clients } from "../data/client";

export default function ClientsPage() {
  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-600  min-h-screen pt-4 px-20 font-serif">
      <h2 className="font-bold mb-4 text-2xl text-purple-600 dark:text-purple-300">Clients</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}
