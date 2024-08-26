import { useEffect, useState } from "react";
import styles from './Project.module.css';
export default function ProjectDetails({ projectId }) {
  const [project, setproject] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetch(`https://react-portfolio-mabf.onrender.com/projects/${projectId}`)
        .then(response => {
           
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
     
          return response.json();
        })
        .then(data => setproject(data))
    }
  }, [projectId]);
  

  return (
    <div className={styles.projectDetails}>
      {project && (
        <div className={styles.projectDiv}>
          <img className={styles.image} src={`/assets/${project.img}`}></img>
          <div className={styles.projectInfo}>
          <h1>{project.title}</h1>
          <p className={styles.projectType}>{project.type}</p>
          <p className={styles.projectDesc}>{project.description}</p>
            <button className={styles.demo}><a href={project.demo}>Demo</a></button>
            </div>
       </div>
      )
}
    </div>
  )
}
