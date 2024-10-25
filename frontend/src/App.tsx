import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssignTaskPage from './pages/AssignTaskPage';
import TaskPage from './pages/TaskPage';
import HealthCheckPage from './pages/HealthCheckPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<TaskPage />} />
                    <Route path="/assign-task" element={<AssignTaskPage />} />
                    <Route path="/health-check" element={<HealthCheckPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
