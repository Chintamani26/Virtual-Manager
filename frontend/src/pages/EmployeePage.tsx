import React, { useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import Navbar from '../components/Navbar';

type Employee = {
  id: number;
  name: string;
  role: string;
  email: string;
  team: string;
  domain: string;
  skills: string[];
  avatar: string;
  status: "Active" | "Inactive";
  experience?: string; // Mark as optional if it may not be present
  location?: string;    // Mark as optional if it may not be present
};

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    email: "alice@example.com",
    team: "UI/UX Team",
    domain: "Web Development",
    skills: ["React", "TypeScript", "CSS"],
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "Active",
    experience: "3 years",
    location: "New York",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    email: "bob@example.com",
    team: "API Team",
    domain: "Backend Systems",
    skills: ["Node.js", "PostgreSQL", "Express"],
    avatar: "https://i.pravatar.cc/150?img=2",
    status: "Active",
    experience: "5 years",
    location: "San Francisco",
  },
  {
    id: 6,
    name: "Frank Brown",
    role: "System Analyst",
    email: "frank@example.com",
    team: "Analysis Team",
    domain: "System Analysis",
    skills: ["SQL", "Business Analysis", "Problem-Solving"],
    avatar: "https://i.pravatar.cc/150?img=6",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Grace Lee",
    role: "UI Designer",
    email: "grace@example.com",
    team: "Design Team",
    domain: "UI/UX Design",
    skills: ["Figma", "Sketch", "Adobe XD"],
    avatar: "https://i.pravatar.cc/150?img=7",
    status: "Active",
  },
  {
    id: 8,
    name: "Henry Black",
    role: "Network Engineer",
    email: "henry@example.com",
    team: "IT Team",
    domain: "Network Infrastructure",
    skills: ["Cisco", "Routing", "Switching"],
    avatar: "https://i.pravatar.cc/150?img=8",
    status: "Active",
  },
  {
    id: 9,
    name: "Isla White",
    role: "DevOps Engineer",
    email: "isla@example.com",
    team: "DevOps Team",
    domain: "Cloud Computing",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    avatar: "https://i.pravatar.cc/150?img=9",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Jack Red",
    role: "Marketing Specialist",
    email: "jack@example.com",
    team: "Marketing Team",
    domain: "Digital Marketing",
    skills: ["SEO", "Content Creation", "Social Media"],
    avatar: "https://i.pravatar.cc/150?img=10",
    status: "Active",
  }
  // Add additional employees with experience and location fields as appropriate
];

const EmployeeCard: React.FC<Employee & { onUpdate: (id: number) => void }> = ({
  id,
  name,
  role,
  email,
  team,
  domain,
  skills,
  avatar,
  status,
  experience,
  location,
  onUpdate,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 flex-none w-1/4 flex flex-col items-center">
      <img src={avatar} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-700"><strong>Team:</strong> {team}</p>
      <p className="text-sm text-gray-700"><strong>Domain:</strong> {domain}</p>
      <p className="text-sm text-gray-700"><strong>Experience:</strong> {experience || 'N/A'}</p>
      <p className="text-sm text-gray-700"><strong>Location:</strong> {location || 'N/A'}</p>
      <div className="mt-2">
        <strong>Skills:</strong>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </div>
      <span className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold ${status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
        {status}
      </span>
      <button onClick={() => onUpdate(id)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Update
      </button>
    </div>
  );
};

const EmployeePage: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUpdate = (id: number) => {
    const updatedEmployees = employees.map((employee) => 
      employee.id === id ? { ...employee, status: employee.status === "Active" ? "Inactive" : "Active" } : employee
    );
    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter((employee) => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <Navbar />
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-1/2"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-8">Employee Directory</h1>
      <div className="flex flex-wrap justify-between pl-7 pr-7">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
