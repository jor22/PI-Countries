import  {React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../actions/actions';
import { Link } from 'react-router-dom'
import  styles from './NavBar.module.css'
import SearchBar from './Searchbar'

export default function Navbar({ handleSort , handleCont , handleAct}) {
  const dispatch = useDispatch()
  const {countries} = useSelector((state) => state)

  
  useEffect(() => {
    dispatch(getAll())
  }, [])

 
return (
    <div className={styles.navbar}>

      <div className={styles.container}>
        <h1 className={styles.logo} >
          Countries <span className={styles.span}>|</span> PI
        </h1>
      </div>

      <div className={styles.filterContainer}>
        <select className={styles.filter} name="activity"  onChange={(e) => handleAct(e)} >
            <option value="All">Sort by Activity</option>
            {countries &&
              countries.map((country) => (
                country.Activities &&
                country.Activities.map((activity) => (
                  <option key={activity.id} value={activity.name}>{activity.name}</option>
                ))
            ))}
        </select>
      </div>

      <div className={styles.filterContainer}>
          <select   className={styles.filter} onChange={(e) => handleCont(e)}>
            <option value='All'>Filter by region</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
      </div>


      <div className={styles.filterContainer} >
      <select className={styles.filter} onChange={(e) => handleSort(e)}>
        <option value=''> Sort by </option>
        <option value='AZ'>Name (A-Z)</option>
        <option value='ZA'>Name (Z-A)</option> 
        <option value='populationAsc'>Population (asc)</option>
        <option value='populationDesc'>Population (desc)</option>
      </select>
      </div>

     <div className={styles.ButtonContainer}>
        <button   className={styles.button} >
        <Link   className={styles.link}  to='/activity'>
          Add Activity
        </Link>
        </button>
      </div>

    <SearchBar/>
    </div>
  )
}
