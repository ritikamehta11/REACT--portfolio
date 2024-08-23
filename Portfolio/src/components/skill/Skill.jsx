import React, { useState, useEffect } from 'react';
import styles from './Skill.module.css';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/skills')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setSkills(data))
   
  }, []);

  return (
    <section className={styles.skill}>
      <h1 className={styles.heading}>My Skills</h1>
      <ul className={styles.list}>
        {skills.map(skill => (
          <li key={skill._id}>
            <h2 className={styles.skillHeading}>{skill.title}</h2>
            <p className={styles.skillDesc}>{skill.description}</p>
           
          </li>
        ))}
      </ul>
    </section>
  );
}

