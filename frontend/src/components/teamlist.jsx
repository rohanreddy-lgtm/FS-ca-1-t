import React from "react";
import TeamCard from "./teamCard.jsx";

const teamMembers = [
  { name: "john", role: "Frontend Developer", image: "https://tse2.mm.bing.net/th?id=OIP.JspVvp_9pgFq8PhHvCyOcAHaFR&pid=Api&P=0&h=180" },
  { name: "Harshith", role: "Backend Developer", image: "https://tse2.mm.bing.net/th?id=OIP.urtsdmUStmL1J-CD1iWBHwHaHa&pid=Api&P=0&h=180" },
  { name: "Gagan R", role: "UI/UX Designer", image: "https://tse1.mm.bing.net/th?id=OIP.iCb2CXimvzv7wxFDN4aHOQAAAA&pid=Api&P=0&h=180" },
  { name: "VC Dhyan", role: "Project Manager", image: "https://tse3.mm.bing.net/th?id=OIP.6dSanBrt56cDR0m5finrtwHaLG&pid=Api&P=0&h=180" }
];

const TeamList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  );
};

export default TeamList;

