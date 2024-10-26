import React from 'react';
import { useThemeStore } from '../store/themeStore';
import Navbar from '../components/Navbar';

// Define a type for employee data
type Employee = {
  id: number;
  name: string;
  role: string;
  email: string;
  team: string;
  domain: string;
  skills: string[];
  avatar: string; // Image URL for avatar
  status: "Active" | "Inactive";
};

// Dummy employee data
const employees: Employee[] = [
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
  },
  {
    id: 3,
    name: "Charlie Davis",
    role: "Data Scientist",
    email: "charlie@example.com",
    team: "AI Team",
    domain: "Data Science",
    skills: ["Python", "Machine Learning", "NLP"],
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "Inactive",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Full Stack Developer",
    email: "david@example.com",
    team: "Development Team",
    domain: "Web Applications",
    skills: ["JavaScript", "React", "Node.js"],
    avatar: "https://i.pravatar.cc/150?img=4",
    status: "Active",
  },
  {
    id: 5,
    name: "Eva Green",
    role: "Product Manager",
    email: "eva@example.com",
    team: "Product Team",
    domain: "Product Management",
    skills: ["Agile", "Scrum", "Communication"],
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "Active",
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
  },
];

const EmployeeCard: React.FC<Employee> = ({
  name,
  role,
  email,
  team,
  domain,
  skills,
  avatar,
  status,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 flex-none w-1/4 flex flex-col items-center">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <div className="mt-2 text-sm text-gray-700">
        <strong>Team:</strong> {team}
      </div>
      <div className="text-sm text-gray-700">
        <strong>Domain:</strong> {domain}
      </div>
      <div className="mt-2">
        <strong>Skills:</strong>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <span
        className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
          status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

const EmployeePage: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8 p-4">Employee Directory</h1>
      <div className="flex flex-wrap justify-between pl-7 pr-7">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeePage;
