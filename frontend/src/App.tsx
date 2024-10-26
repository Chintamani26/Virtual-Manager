import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssignTaskPage from './pages/AssignTaskPage';
import TaskPage from './pages/TaskPage';
// import HealthCheckPage from './pages/HealthCheckPage';
import EmployeePage from './pages/EmployeePage';
import Dashboard from './pages/Dashboard';
import RegisterCompanyPage from './pages/RegisterCompany';
import AuthPage from './pages/AuthPage';
// import FloatingButton from './components/FloatingButton';

const App: React.FC = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/dash" element={<Dashboard />} />
                    <Route path="/emp" element={<EmployeePage />} />
                    <Route path="/tasks" element={<TaskPage />} />
                    <Route path="/assign-task" element={<AssignTaskPage />} />
                    <Route path="/emp" element={<EmployeePage />} />
                    <Route path="/regc" element={<RegisterCompanyPage />} />
                    {/* <FloatingButton /> */}
                    {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
