import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DashboardStats from "../components/DashboardStats";

function OverView() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  if (!context) return null;
  const { state } = context;

  // Stats
  const totalClients = state.clients.length;
  const totalProjects = state.projects.length;
  const paidProjects = state.projects.filter(p => p.paymentStatus === "paid").length;
  const unpaidProjects = state.projects.filter(p => p.paymentStatus === "unpaid").length;
  const totalPayments = state.payments.reduce((sum, p) => sum + p.amount, 0);

 


  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen pt-6 px-4 md:px-20 font-sans transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-4 md:mb-0">
          Welcome, Manage your Projects
        </h1>
        <button
          className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg transition duration-300"
          onClick={() => navigate("/projects/new")}
        >
          + Add Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <select className="bg-white dark:bg-gray-700 dark:text-white p-2 px-4 rounded-full shadow-md">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
        <select className="bg-white dark:bg-gray-700 dark:text-white p-2 px-4 rounded-full shadow-md">
          <option value="Highest Budget">Highest Budget</option>
          <option value="Lowest Budget">Lowest Budget</option>
        </select>
        <div className="bg-white dark:bg-gray-700 dark:text-white p-2 px-4 rounded-full shadow-md cursor-pointer">
          Closest Deadline
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardStats title="Clients" value={totalClients} bgColor="bg-blue-600" />
        <DashboardStats title="Projects" value={totalProjects} bgColor="bg-yellow-600" />
        <DashboardStats title="Paid Projects" value={paidProjects} bgColor="bg-green-600" />
        <DashboardStats title="Unpaid Projects" value={unpaidProjects} bgColor="bg-red-600" />
      </div>

      {/* Payments Summary */}
      <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-2xl shadow-lg mb-10 transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-300">
          Total Payments Received
        </h2>
        <p className="text-3xl font-bold">${totalPayments}</p>
      </div>

      {/* Recent Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-300">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.projects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="p-5 rounded-2xl shadow-md cursor-pointer transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 dark:text-white"
            >
              <h3 className="font-bold text-xl mb-2 text-purple-600 dark:text-purple-300">{project.title}</h3>
              <p className="mb-1">
                Client:{" "}
                <span className="font-medium">
                  {state.clients.find(c => c.id === project.clientId)?.name || "Client not found"}
                </span>
              </p>
              <p className="mb-1">
                Status:{" "}
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    project.paymentStatus === "paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {project.paymentStatus === "paid" ? "Paid" : "Unpaid"}
                </span>
              </p>
              <p>Budget: ${project.budget}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverView;
