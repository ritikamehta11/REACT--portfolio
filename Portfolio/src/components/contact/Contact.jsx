import styles from './Contact.module.css';
import appstyles from '../../App.module.css';
export default function Contact() {
  return (
    <section id='Contact' className={styles.contact}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={`${appstyles.container} ${styles.content}`}>
<div className={styles.contactDetails}>
        <p>mehtaritika@gmail.com</p>
        <p>437-799-8644</p>
      </div>
      <div className={styles.socialmedia}>
        <img src="../src/assets/insta-logo.png" alt="insta" />
        <img src="../src/assets/linkedinlogo.png" alt="linkedinlogo" />
        <img src="../src/assets/githublogo.png" alt="githublogo" />

      </div></div>
    </section>
  )
}