import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-white text-2xl font-bold">Virtual Manager</h1>
          <div className="flex items-center">
            <DarkModeToggle />
            <div className="ml-3">
              <Link to="/" className="text-white mr-4">
                Dashboard
              </Link>
              <Link to="/emp" className="text-white mr-4">
                Employees
              </Link>
              <Link to="/logout">
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
