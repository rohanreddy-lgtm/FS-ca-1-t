import React from "react";
import TeamList from "./components/teamList.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mt-10">Our Team</h1>
      <p className="text-gray-600 mt-2">Meet our amazing team members!</p>
      <TeamList />
    </div>
  );
};

export default App;