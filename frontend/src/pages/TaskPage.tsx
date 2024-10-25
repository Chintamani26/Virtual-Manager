import React from 'react';

const TaskPage: React.FC = () => {
    const tasks = [
        { id: 1, title: "Task 1", assignedTo: "Alice", status: "In Progress" },
        { id: 2, title: "Task 2", assignedTo: "Bob", status: "Completed" },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Tasks Overview</h1>
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Assigned To</th>
                        <th className="border px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td className="border px-4 py-2">{task.title}</td>
                            <td className="border px-4 py-2">{task.assignedTo}</td>
                            <td className="border px-4 py-2">{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskPage;
