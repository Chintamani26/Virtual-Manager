import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 

// Define employee data type
type Employee = {
  id: number;
  name: string;
  email: string;
  role: string;
  team: string;
  skills: string[];
};

// Dummy team and skill options
const teams = ["UI/UX Team", "Backend Team", "AI Team", "QA Team"];
const skillOptions = ["React", "Node.js", "Python", "Data Science", "CSS"];

// Register Company Page Component
const RegisterCompanyPage: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Handle file upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  // Add employee to the list
  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreeToTerms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    // Submit data to backend or API (placeholder)
    console.log({
      companyName,
      companyEmail,
      industry,
      logo,
      employees,
    });
    alert("Company registered successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <Navbar />
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Register Company</h1>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Company Email */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Company Email</label>
            <input
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Industry */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select Industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          {/* Logo Upload */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Company Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mr-2"
              required
            />
            <span>I agree to the terms and conditions.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register Company
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompanyPage;