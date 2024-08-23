//  this components retrieves the list of projects and click events handler
import React from "react";
import styles from './Project.module.css';

export default function ProjectList ({ projects, onSelectProject }) {
  return (
    <div className={styles.projectList}>
      {
        projects.map(project => (
          <div className={styles.tabs} key={project._id} onClick={()=> onSelectProject(project._id)}>
            {project.title} 
          </div>
        ))
      }
    </div>
  )
}