import styles from './Section.module.css';
import appstyles from '../../App.module.css'
export default function Section({sectionHeading,sectionContent}) {
  return (
    <section className={appstyles.container}>
      <div className={styles.heading}>
    {sectionHeading}
      </div>
      <div className={styles.content}>
        {sectionContent}
      </div>
    </section>
    
  )
}
