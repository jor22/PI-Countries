import React from 'react'
import styles from './Card.module.css'

export function Country({ id, name, continent, flag }) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={flag} alt='national-flag' />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.link} to={`/countries/${id}`}>
          <h3 className={styles.country}>{name}</h3>
        </div>
        <h4 className={styles.continent}>{continent}</h4>
      </div>
    </div>
  )
}
