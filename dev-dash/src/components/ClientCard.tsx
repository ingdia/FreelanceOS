import type { Client } from "../types/client";

interface Props {
  client: Client;
}

export default function ClientCard({ client }: Props) {
  return (
    <div className="p-4 border-0 shadow-2xl rounded-lg  bg-white">
      <h3 className="font-semibold text-lg">{client.name}</h3>
      <p className="text-gray-600">{client.country}</p>

      {client.email ? (
        <p className="text-sm text-blue-600">{client.email}</p>
      ) : (
        <p className="text-sm text-gray-400 italic">No email provided</p>
      )}
    </div>
  );
}
