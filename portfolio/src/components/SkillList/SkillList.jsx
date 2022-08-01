import "./SkillList.css";

const SkillList = ({ skills }) => {
  return (
    <>
      <div className="skills-cont">
        {/* <button onClick={() => handleClick(skills.id)}>Show my stack!</button> */}
        {skills.map((skill) => {
          return (
            <div className="skillHolder" key={skills.id}>
              <h2>{skill.name}</h2>
            </div>
          );
        })}
      </div>
      <div className="projects">
        
      </div>
    </>
  );
};

export default SkillList;
