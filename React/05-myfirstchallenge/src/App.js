import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
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
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="👶" color="red" />
      <Skill skill="Java" emoji="💪" color="green" />
    </div>
  );
}

// Skill
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
