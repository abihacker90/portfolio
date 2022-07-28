import { useState } from "react";

const About = () => {
  const [skills, setSkills] = useState([
    { name: "html", id: 1 },
    { name: "css/scss", id: 2 },
    { name: "JavaScript", id: 3 },
    { name: "React", id: 4 },
    { name: "nodejs", id: 5 },
    { name: "express.js", id: 6 },
  ]);

  return (
    <>
      <div className="about"></div>
      <div className="skillSet">
        {skills.map((skill) => {
            <div className='skillHolder' key={skills.id}>
                <h2>{skill.name}</h2>
            </div>
        })}
      </div>
    </>
  );
};

export default About;
