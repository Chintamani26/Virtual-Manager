import React from 'react';

const AssignTaskPage: React.FC = () => {
    const sampleTasks = [
        { id: 1, title: "Task 1", description: "Complete documentation" },
        { id: 2, title: "Task 2", description: "Implement feature X" },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Assign Tasks</h1>
            <ul>
                {sampleTasks.map(task => (
                    <li key={task.id} className="border p-2 my-2 rounded">
                        <h2 className="font-semibold">{task.title}</h2>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignTaskPage;
