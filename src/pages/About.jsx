import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white p-8">
      {/* Navbar */}
      <div className="flex justify-end space-x-6 mb-12">
        <Link
          to="/"
          className="text-lg font-semibold text-white hover:text-gray-200 transition-all transform hover:scale-105"
        >
          Home
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-center mb-12 drop-shadow-lg">
        About Us
      </h1>

      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Arindam */}
        <div className="bg-white bg-opacity-80 text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Arindam Bose</h2>
          <p>
            Hi, I am Arindam Bose. I have developed the complete frontend of this Voting cum Polling website for our final semester project at Acharya Prafulla Chandra College. I focused on designing a clean, functional, and user-friendly interface using React and TailwindCSS.
          </p>
        </div>

        {/* Koushik */}
        <div className="bg-white bg-opacity-80 text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Koushik Mondal</h2>
          <p>
            Hello, I am Koushik Mondal. I worked on the backend development of this project, ensuring the secure handling of data, user authentication, and seamless integration with the frontend. My goal was to make the system stable, efficient, and safe.
          </p>
        </div>

        {/* Nasir */}
        <div className="bg-white bg-opacity-80 text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Nasir Uddin</h2>
          <p>
            I am Nasir Uddin. My responsibility in this project was to create detailed documentation, DFD (Data Flow Diagrams), and overall planning and coordination. I ensured the project maintained clarity, direction, and professional structure from start to finish.
          </p>
        </div>
      </div>

      <div className="text-center mt-16 opacity-90">
        <p>&copy; 2025 Voting System Project</p>
      </div>
    </div>
  );
}

export default About;
