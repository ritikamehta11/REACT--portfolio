import React from 'react'
import Navbar from '../navbar/Navbar'
import styles from './Header.module.css'
import appStyles from '../../App.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
    
  )
}