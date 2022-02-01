import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails } from "../actions/actions";
import styles from './Detail.module.css'
import { Link, useParams } from "react-router-dom";



export default function Detail(){

    const id = useParams().id
    const dispatch = useDispatch()
    const details = useSelector((state) => state.country)

    useEffect(() => {
        
        dispatch(getCountryDetails(id))

    }, [] )


    return(

    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img alt='flag' src={details.flag} className={styles.img} />
        </div>

        <div className={styles.infoContainer}>

          <h1 className={styles.title}>
            {details.name} ({details.id})
          </h1>
          <h2 className={styles.subtitle}>
            {details.officialName} <br/>
            {details.continent}
            {details.subregion ? ' | ' + details.subregion : null}
          </h2>
          <h4>Capital: {details.capital}</h4>
          <h4>Population: {details.population}</h4>
          <h4>Area: {details.area} km²</h4>
          <h4 className={styles.activities}>Activities:</h4>
          
          <ul>
            {details.Activities &&
              details.Activities.map((activity) => (
                <li key={activity.id}  className={styles.li}>
                  <p>
                    <strong>{activity.name}</strong> ({activity.season}) | Duration:{' '}
                    {activity.duration} - Difficulty: {activity.difficulty}
                  </p>
                </li>
              ))}
          </ul>

          <Link to='/countries'>
            <button className={styles.btn}>Go back</button>
          </Link>


        </div>
      </div>
    </div>
    )

}