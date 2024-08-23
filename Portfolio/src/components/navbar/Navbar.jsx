import styles from './Navbar.module.css'
import appStyles from '../../App.module.css'
export default function Navbar() {
  return (
    <nav className={appStyles.container}>
      <ul className={styles.navUl}>
        <li className={styles.navItem}>
          <a href="#">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#About">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#Contact">Contact</a>
        </li>
        <li className={styles.navItem}>
          <a href="#Projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
