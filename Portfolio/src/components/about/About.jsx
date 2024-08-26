import styles from './About.module.css'
import appstyles from "../../App.module.css";
import img from "../../assets/aboutImg.png";
import { useState, useEffect } from "react";
export default function About() {
  
  return ( 
    <section id="About" className={styles.about}>


      <div className={styles.heroHeader}>
          <h4 className={styles.heading}>About</h4>
        
      </div>
      
      <div className={`${appstyles.container} ${styles.content}`}>
        
<div className={styles.aboutImgDiv}>
            <div className={styles.aboutImgOuterBox}>
              <img src={img} alt="" />
            </div>
        </div>
        
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            Hey there, I'm Ritika Mehta, currently riding the web development wave at Humber College. Picture me with a laptop adorned with stickers, diving headfirst into the magical world of coding. When I'm not taming those wild HTML tags and CSS stylesheets, you'll catch me unleashing my inner Picasso with a paintbrush, or getting lost in a thrilling novel. 
</p>
        </div>



       </div>
      



    </section> 
  )
}