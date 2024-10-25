import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssignTaskPage from './pages/AssignTaskPage';
import TaskPage from './pages/TaskPage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<TaskPage />} />
                    <Route path="/assign-task" element={<AssignTaskPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
