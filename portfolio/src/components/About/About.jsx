import './About.css'
import { useState } from "react";
import SkillList from "../SkillList/SkillList";

const About = () => {
  const aboutContent =
    "The past few years, I've spent my free time educating myself to become a frontend developer. Basically, I am a professional musician and teacher. My experience as a teacher helped me collaborate with fellow developers. Additionally, working with kids isn't an easy task, however, it has helped me become efficient, productive, and fast even in a very stressful environment, which is an important skill in the tech industry. You should hire me!";
  const skills = [
    { name: "html5", id: 1 },
    { name: "css3/scss", id: 2 },
    { name: "JavaScript", id: 3 },
    { name: "React", id: 4 },
    { name: "nodejs/express.js", id: 5 },
    { name: "github", id: 6 },
    { name: "docker", id: 7 },
  ];

  /* const handleClick = () => {
    const newSkills = skills.add()
  }; */

  return (
    <>
      <div className="about">
        <p>{aboutContent}</p>
        {/* <button onClick={() => handleClick(skill.id)}>Show my stack!</button> */}
      </div>
      <div className="skillSet">
        <SkillList skills={skills}/>
      </div>
    </>
  );
};

export default About;
