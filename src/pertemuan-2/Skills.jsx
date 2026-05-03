const Skills = () => {
  const skills = [
    'React.js', 'JavaScript', 'HTML/CSS', 'Node.js',
    'Python', 'UI/UX Design', 'Git', 'Database SQL'
  ]

  return (
    <div className="skills">
      <h2>Keterampilan</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills