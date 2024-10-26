// FloatingButton.tsx
import React from 'react';
import { FaRobot } from 'react-icons/fa'; // Assuming you're using FaRobot for the chatbot icon

const FloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center text-white">
        <FaRobot className="text-4xl" /> {/* Increased size of icon */}
        <span className="text-lg font-semibold"></span> {/* Chatbot label */}
      </div>
    </div>
  );
};

export default FloatingButton;
