import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-lg font-bold mt-3">{member.name}</h2>
      <p className="text-gray-600">{member.role}</p>
    </div>
  );
};

export default TeamCard;