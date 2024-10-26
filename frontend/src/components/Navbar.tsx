// import React from "react"; 
import { Link } from "react-router-dom";
import { Button } from "../components/button";
// import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-black text-2xl font-bold">Virtual Manager</h1>
          <div className="flex items-center">
            {/* <DarkModeToggle /> */}
            <div className="ml-3 flex items-center">
              <Link to="/dash" className="text-black mr-4">
                Dashboard
              </Link>
              <Link to="/emp" className="text-black mr-4">
                Employees
              </Link>
              <Link to="/proman" className="text-black mr-4">
                Add Project
              </Link>
              <Link to="/regc" className="text-black mr-4">
                Add Company
              </Link>
              <Link to="/empd" className="text-black mr-4">
                Employee Dashboard
              </Link>
              <Link to="/notifications" className="text-black mr-4 relative">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">1</span> {/* Notification badge */}
              </Link>
              <Link to="/messages" className="text-black mr-4">
                <FontAwesomeIcon icon={faComments} />
              </Link>
              <Link to="/">
                <Button variant="destructive">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
