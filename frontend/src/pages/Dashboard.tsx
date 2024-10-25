import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaUsers, FaClipboardList, FaRegChartBar } from 'react-icons/fa';

// StatisticCard component to make each card reusable and dynamic
const StatisticCard: React.FC<{ icon: JSX.Element, title: string, data: string | number }> = ({ icon, title, data }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-semibold ml-2">{title}</h2>
    </div>
    <p className="text-gray-700 font-bold text-3xl">{data}</p>
  </div>
);

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    totalProjects: 0,
    ongoingProjects: 0,
    completedProjects: 0,
  });
  const [recentActivities, setRecentActivities] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard/stats');
        const data = await response.json();
        setStats(data.stats);
        setRecentActivities(data.recentActivities);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <h1 className="text-4xl font-extrabold my-6 text-center text-gray-800">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-6 lg:px-20">
        <StatisticCard icon={<FaRegChartBar className="text-blue-600 text-3xl" />} title="Overview" data="See below" />
        <StatisticCard icon={<FaUsers className="text-blue-600 text-3xl" />} title="Total Employees" data={stats.totalEmployees} />
        <StatisticCard icon={<FaUsers className="text-green-600 text-3xl" />} title="Active Employees" data={stats.activeEmployees} />
        <StatisticCard icon={<FaUsers className="text-red-600 text-3xl" />} title="Inactive Employees" data={stats.inactiveEmployees} />
        <StatisticCard icon={<FaClipboardList className="text-blue-600 text-3xl" />} title="Total Projects" data={stats.totalProjects} />
        <StatisticCard icon={<FaClipboardList className="text-green-600 text-3xl" />} title="Ongoing Projects" data={stats.ongoingProjects} />
        <StatisticCard icon={<FaClipboardList className="text-gray-900 text-3xl" />} title="Completed Projects" data={stats.completedProjects} />
      </div>

      {/* Recent Activities Section */}
      <div className="mt-10 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside">
            {recentActivities.length > 0 ? (
              recentActivities.map((activity, index) => (
                <li key={index} className="text-gray-700">{activity}</li>
              ))
            ) : (
              <p className="text-gray-500">No recent activities to display.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
