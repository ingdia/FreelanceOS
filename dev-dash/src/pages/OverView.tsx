import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Users, FolderKanban, Activity, CheckCircle } from "lucide-react";
import { AppContext } from "../context/AppContext";
import DashboardStats from "../components/DashboardStats";

function OverView() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  if (!context) return null;
  const { state } = context;

  const totalClients = state.clients.length;
  const totalProjects = state.projects.length;
  const paidProjects = state.projects.filter(p => p.paymentStatus === "paid").length;
  const unpaidProjects = state.projects.filter(p => p.paymentStatus === "unpaid").length;
  const totalPayments = state.payments.reduce((sum, p) => sum + p.amount, 0);
  const activeProjects = state.projects.filter(p => p.status === "in-progress").length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <DashboardStats title="Total Clients" value={totalClients} bgColor="bg-gradient-to-br from-gray-600 to-purple-600" link="/client" icon={Users} />
              <DashboardStats title="Total Projects" value={totalProjects} bgColor="bg-gradient-to-br from-purple-600 to-gray-600" link="/project" icon={FolderKanban} />
              <DashboardStats title="Active Projects" value={activeProjects} bgColor="bg-gradient-to-br from-gray-700 to-purple-700" icon={Activity} />
              <DashboardStats title="Paid Projects" value={paidProjects} bgColor="bg-gradient-to-br from-purple-700 to-gray-700" icon={CheckCircle} />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-purple-600 rounded"></div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Projects
                  </h2>
                </div>
                <button
                  onClick={() => navigate("/project")}
                  className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline"
                >
                  View All →
                </button>
              </div>

              {state.projects.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 dark:text-gray-500 mb-2">
                    <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    No projects yet
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Get started by creating your first project
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {state.projects.slice(0, 4).map((project) => (
                    <div
                      key={project.id}
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:border-purple-600 dark:hover:border-purple-500 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {state.clients.find(c => c.id === project.clientId)?.name || "Unknown Client"}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-semibold text-purple-600 dark:text-purple-400">
                            ${project.budget.toLocaleString()}
                          </p>
                          <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                            project.paymentStatus === "paid"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }`}>
                            {project.paymentStatus === "paid" ? "Paid" : "Unpaid"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Total Revenue
              </h3>
              <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                ${totalPayments.toLocaleString()}
              </p>
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>All time earnings</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/project")}
                  className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Projects
                </button>
                <button
                  onClick={() => navigate("/client")}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  View Clients
                </button>
                <button
                  onClick={() => navigate("/payment")}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Payments
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                Payment Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-900 dark:text-white">Paid Projects</span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">{paidProjects}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${totalProjects > 0 ? (paidProjects / totalProjects) * 100 : 0}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-900 dark:text-white">Unpaid Projects</span>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">{unpaidProjects}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full transition-all"
                    style={{ width: `${totalProjects > 0 ? (unpaidProjects / totalProjects) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;