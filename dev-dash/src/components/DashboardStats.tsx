import React from "react";
import { useNavigate } from "react-router-dom";

interface DashboardStatsProps {
  title: string;
  value: number;
  bgColor?: string;       // e.g., "bg-purple-600"
  textColor?: string;     // e.g., "text-white"
  link?: string;          // optional navigation link
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  title,
  value,
  bgColor = "bg-purple-600",
  textColor = "text-white",
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-2xl shadow-md cursor-pointer transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${bgColor} ${textColor}`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardStats;
