import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {skills.map((skill) => (
          <SkillList mySkills={skill} key={skill.skill} />
        ))}
      </div>
    </div>
  );
}

//Avatar for the Image
function Avatar() {
  return <img className="avatar" src="./DeveloperImg.jpg" alt="DevImg"></img>;
}

// Intro for the Developer
function Intro() {
  return (
    <div className="data">
      <h1>Sairam566</h1>
      <p>
        Software Engineer at XXXX with 5 Years of experience in Java, Spring,
        Hibernate, Web-Services | Java Full Stack Developer
      </p>
    </div>
  );
}
// SkillList
function SkillList({ mySkills }) {
  return (
    <div className="skill-list">
      <Skill
        skill={mySkills.skill}
        level={mySkills.level}
        color={mySkills.color}
      />
    </div>
  );
}

// Skill
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
