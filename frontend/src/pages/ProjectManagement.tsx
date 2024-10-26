import Navbar from '@/components/Navbar'; // Import the Navbar
import React, { useState } from 'react'; 

// Types for project structure
interface Project {
  id: number;
  name: string;
  techStack: string;
  deadline: string;
  description: string;
  status: 'To-Do' | 'In Progress' | 'Completed';
}

// Dummy AI-powered team selection
const aiTeamSuggestion = 'Alice (Backend), Bob (Frontend), Charlie (DevOps)';

// Component for Project Management Page
const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({
    id: 0,
    name: '',
    techStack: '',
    deadline: '',
    description: '',
    status: 'To-Do',
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new project
  const handleAddProject = () => {
    if (newProject.name) {
      setProjects((prev) => [
        ...prev,
        { ...newProject, id: Date.now(), status: 'To-Do' },
      ]);
      setNewProject({
        id: 0,
        name: '',
        techStack: '',
        deadline: '',
        description: '',
        status: 'To-Do',
      });
    }
  };

  // Move project to a new status
  const moveProject = (id: number, status: 'To-Do' | 'In Progress' | 'Completed') => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, status } : project
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Include Navbar here */}

      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Project Management</h1>

        {/* Add New Project Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
          <input
            type="text"
            name="name"
            value={newProject.name}
            onChange={handleInputChange}
            placeholder="Project Name"
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="text"
            name="techStack"
            value={newProject.techStack}
            onChange={handleInputChange}
            placeholder="Tech Stack"
            className="w-full border rounded p-2 mb-2"
          />
          <input
            type="date"
            name="deadline"
            value={newProject.deadline}
            onChange={handleInputChange}
            className="w-full border rounded p-2 mb-2"
          />
          <textarea
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full border rounded p-2 mb-2"
            rows={3}
          ></textarea>
          <button
            onClick={handleAddProject}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Project
          </button>
        </div>

        {/* AI-Powered Team Suggestion */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">AI-Powered Team Selection</h2>
          <p>Suggested Team: {aiTeamSuggestion}</p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-3 gap-4">
          {['To-Do', 'In Progress', 'Completed'].map((status) => (
            <div key={status} className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">{status}</h2>
              {projects
                .filter((project) => project.status === status)
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-100 p-2 mb-2 rounded-lg"
                  >
                    <h3 className="font-bold">{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.techStack}</p>
                    <p>Deadline: {project.deadline}</p>
                    <div className="mt-2">
                      {status !== 'To-Do' && (
                        <button
                          onClick={() => moveProject(project.id, 'To-Do')}
                          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                        >
                          Move to To-Do
                        </button>
                      )}
                      {status !== 'In Progress' && (
                        <button
                          onClick={() => moveProject(project.id, 'In Progress')}
                          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        >
                          Move to In Progress
                        </button>
                      )}
                      {status !== 'Completed' && (
                        <button
                          onClick={() => moveProject(project.id, 'Completed')}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                          Move to Completed
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Timeline View for Gantt Chart Alternative */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="mb-2">
                <span className="font-bold">{project.name}</span>: Due by{' '}
                {project.deadline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
