import React from 'react';
import Navbar from '../components/ui/Navbar'; // Import your Navbar component

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-4 md:p-10">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Overview</h2>
            <p className="text-gray-700">This is a brief overview of your application status.</p>
          </div>

          {/* Employee Statistics Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Employee Statistics</h2>
            <p className="text-gray-700">Total Employees: <span className="font-bold text-gray-900">50</span></p>
            <p className="text-gray-700">Active: <span className="font-bold text-green-600">45</span></p>
            <p className="text-gray-700">Inactive: <span className="font-bold text-red-600">5</span></p>
          </div>

          {/* Project Statistics Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Project Statistics</h2>
            <p className="text-gray-700">Total Projects: <span className="font-bold text-gray-900">10</span></p>
            <p className="text-gray-700">Ongoing: <span className="font-bold text-green-600">6</span></p>
            <p className="text-gray-700">Completed: <span className="font-bold text-gray-900">4</span></p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Recent Activities</h2>  
          <div className="bg-white shadow-md rounded-lg p-6">
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
