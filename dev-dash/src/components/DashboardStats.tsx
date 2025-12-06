import React from "react";
import { useNavigate } from "react-router-dom";

interface DashboardStatsProps {
  title: string;
  value: number;
  bgColor?: string;
  textColor?: string;
  link?: string;
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
      className={`${bgColor} ${textColor} rounded-lg shadow-sm p-6 ${
        link ? "cursor-pointer hover:shadow-lg" : ""
      } transition-shadow`}
    >
      <h3 className="text-sm font-medium opacity-90 mb-2">{title}</h3>
      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardStats;