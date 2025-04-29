import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // hook to programmatically navigate

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Navigation Bar */}
      <div className="absolute top-0 right-0 p-6">
        <nav className="flex space-x-10">
          <button
            onClick={() => navigate("/")}
            className="text-lg font-medium hover:text-indigo-200 transition-all ease-in-out transform hover:scale-105"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-lg font-medium hover:text-indigo-200 transition-all ease-in-out transform hover:scale-105"
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="text-lg font-medium hover:text-indigo-200 transition-all ease-in-out transform hover:scale-105"
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Landing Text */}
      <h1 className="text-6xl font-extrabold text-center mb-8 drop-shadow-2xl leading-tight">
        Your Vote, Your Right
      </h1>

      {/* Buttons */}
      <div className="space-x-8">
        <button
          onClick={() => navigate("/registration")}
          className="px-10 py-4 bg-indigo-600 text-white text-lg rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Registration
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-10 py-4 bg-purple-600 text-white text-lg rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Log In
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm opacity-70">
        <p>&copy; 2025 Voting System. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Home;
