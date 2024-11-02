import React from "react";
import "./skillBox.scss";

const SkillBox = ({ skillName, skillDetail }) => {
  return (
    <div className="skill-box">
      <h3>{skillName}</h3>
      <p>{skillDetail}</p>
    </div>
  );
};

export default SkillBox;