import React  from 'react'
import  styles from './NavBar.module.css'
import SearchBar from './Searchbar'

export default function Navbar() {
return (
    <div className={styles.navbar}>

      <div className={styles.container}>
        <h1 className={styles.logo} >
          Countries <span className={styles.span}>|</span> PI
        </h1>
      </div>

    <SearchBar/>

    </div>
  )
}
