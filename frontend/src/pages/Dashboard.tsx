import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaUsers, FaClipboardList, FaRegChartBar } from 'react-icons/fa';
import { useThemeStore } from '../store/themeStore';

const Dashboard: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  // Example dynamic state for employee and project statistics
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    totalProjects: 0,
    ongoingProjects: 0,
    completedProjects: 0,
  });

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const data = {
        totalEmployees: 50,
        activeEmployees: 45,
        inactiveEmployees: 5,
        totalProjects: 10,
        ongoingProjects: 6,
        completedProjects: 4,
      };
      setStats(data);
    };

    fetchData();
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <Navbar />
      <div className="p-4 md:p-10 mt-16 w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-center">{isDarkMode ? 'Dashboard' : 'Dashboard'}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className={`shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="flex items-center mb-4">
              <FaRegChartBar className="text-green-400 text-3xl mr-2" />
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-gray-700">This is a brief overview of your application status.</p>
          </div>

          {/* Employee Statistics Card */}
          <div className={`shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="flex items-center mb-4">
              <FaUsers className="text-green-400 text-3xl mr-2" />
              <h2 className="text-2xl font-semibold">Employee Statistics</h2>
            </div>
            <p className="text-gray-700">Total Employees: <span className="font-bold text-gray-700">{stats.totalEmployees}</span></p>
            <p className="text-gray-700">Active: <span className="font-bold text-green-400">{stats.activeEmployees}</span></p>
            <p className="text-gray-700">Inactive: <span className="font-bold text-red-500">{stats.inactiveEmployees}</span></p>
          </div>

          {/* Project Statistics Card */}
          <div className={`shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="flex items-center mb-4">
              <FaClipboardList className="text-green-400 text-3xl mr-2" />
              <h2 className="text-2xl font-semibold">Project Statistics</h2>
            </div>
            <p className="text-gray-700">Total Projects: <span className="font-bold text-gray-700">{stats.totalProjects}</span></p>
            <p className="text-gray-700">Ongoing: <span className="font-bold text-green-400">{stats.ongoingProjects}</span></p>
            <p className="text-gray-700">Completed: <span className="font-bold text-gray-700">{stats.completedProjects}</span></p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">{isDarkMode ? 'Recent Activities' : 'Recent Activities'}</h2>
          <div className={`shadow-md rounded-lg p-6 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <ul className="list-disc list-inside">
              <li className="text-gray-700">Employee <strong className="text-blue-600">John Doe</strong> was added to the team.</li>
              <li className="text-gray-700">Project <strong className="text-blue-600">"Virtual Manager"</strong> was completed.</li>
              <li className="text-gray-700">Team meeting scheduled for <strong className="text-blue-600">next Monday</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
