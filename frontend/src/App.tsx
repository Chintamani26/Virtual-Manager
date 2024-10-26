import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssignTaskPage from './pages/AssignTaskPage';
import TaskPage from './pages/TaskPage';
import EmployeePage from './pages/EmployeePage';
import Dashboard from './pages/Dashboard';
import RegisterCompanyPage from './pages/RegisterCompany';

const App: React.FC = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/emp" element={<EmployeePage />} />
                    <Route path="/tasks" element={<TaskPage />} />
                    <Route path="/assign-task" element={<AssignTaskPage />} />
                    <Route path="/regc" element={<RegisterCompanyPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
