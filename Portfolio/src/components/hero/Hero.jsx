// import Section from "../section/Section"
import styles from "./Hero.module.css";
import appstyles from "../../App.module.css";
import img from "../../assets/heroImg.png";
import Header from "../header/Header";
import { useState, useEffect } from "react";
export default function Hero() {
  const [isSmallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <section>
        <div className={styles.heroHeader}>
          <h4 className={styles.heading}>Portfolio</h4>
          <div>{isSmallScreen && <Header />}</div>
        </div>

        <div className={`${appstyles.container} ${styles.content}`}>
          <div className={styles.heroText}>
            <p>Hello.</p>
            <p>
              I am <span className={styles.heroMainHeading}>Ritika Mehta</span>
            </p>
            <p>
              and am a
              <span className={`${styles.heroMainHeading} ${styles.block}`}>
                Full Stack Developer
              </span>
            </p>
          </div>


          <div className={styles.heroImgDiv}>
            <div className={styles.heroImgOuterRing}>
              <img src={img} alt="" />
            </div>
          </div>
          
        </div>
      </section>
      <section>{isSmallScreen || <Header />}</section>
    </section>
  );
}
