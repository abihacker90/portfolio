const SkillList = ({skills}) => {
  return (
    <div className="skills-cont">
      {skills.map((skill) => {
        return (
          <div className="skillHolder" key={skills.id}>
            <h2>{skill.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default SkillList;
