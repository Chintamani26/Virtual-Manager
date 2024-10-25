import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Virtual Manager</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/emp" className="text-white hover:text-gray-200">
            Employees
          </Link>
          <Link to="/projects" className="text-white hover:text-gray-200">  
            Projects
          </Link>
          <Link to="/reports" className="text-white hover:text-gray-200">
            Reports
          </Link>
          <Link to="/settings" className="text-white hover:text-gray-200">
            Settings
          </Link>
          <Link to="/logout" className="text-white hover:text-gray-200">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
