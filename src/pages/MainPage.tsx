import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Welcome to the Main Page!</h1>
        <p className="text-gray-600 text-center mb-6">Explore our features and manage your profile.</p>

        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
            onClick={() => alert("Feature 1 Coming Soon!")}
          >
            Feature 1
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
            onClick={() => alert("Feature 2 Coming Soon!")}
          >
            Feature 2
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
            onClick={() => alert("Feature 3 Coming Soon!")}
          >
            Feature 3
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
