import React,{ useEffect, useState } from 'react';
import styles from './Project.module.css';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import appstyles from '../../App.module.css';


export default function Project() {
  const [projects, setprojects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  


  useEffect(() => {
    fetch('https://react-portfolio-sa7t.onrender.com/projects')
      .then(response => {
      if (!response.ok) { 
        throw new Error('Network response was not ok');
      }
     
      return response.json();
    })
      .then(data => setprojects(data)) 
  }, []);

  function handleSelectedProject(id) {
    setSelectedProjectId(id);
  }
  return (
<section id='Projects' className={styles.project}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={`${appstyles.container} ${styles.content}`}>
      <div className={styles.left}>
        <ProjectList  projects={projects} onSelectProject={handleSelectedProject}></ProjectList>
        </div>
        <div className={styles.right}>
          <ProjectDetails projectId={selectedProjectId}> </ProjectDetails>

        </div>
      </div>
      
    </section>
  )
  
}
