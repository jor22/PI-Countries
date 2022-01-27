import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to my CountryApp<span className={styles.span} >.</span></h1>
        <h3 className={styles.text}>
        Would you like to know about countries around the world ?
        </h3>
        <Link to='/countries'>
          <button className={styles.btn}>Home</button>
        </Link>
        <p className={styles.footer}>A project by Jorge Ariel Castillo </p>
      </div>
    </div>
  )
}
