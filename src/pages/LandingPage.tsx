import React from "react";

interface LandingPageProps {
  onLogin: (isAdmin: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to My App</h1>
        <p className="mb-4">Please select your login type:</p>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold mb-4"
          onClick={() => onLogin(false)}
        >
          User Login
        </button>
        <br />
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-lg font-bold"
          onClick={() => onLogin(true)}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
