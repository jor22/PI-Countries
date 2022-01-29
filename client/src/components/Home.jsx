import  {React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../actions/actions';
import Navbar from './NavBar';
import styles from './Home.module.css';
import { Country} from './Card'


export default function Home() {
    const dispatch = useDispatch()
    const {countries} = useSelector((state) => state)


   
    useEffect(() => {
        dispatch(getAll())  
    }, [] )

    

    console.log(countries)
  
    return (
        <div className={styles.container}>

        <Navbar/>

        <div className={styles.countryContainer}>

            {countries 
            && countries.map((c) => (
                    <Country
                    name={c.name}
                    flag={c.flag}
                    id={c.id}
                    key={c.id}
                    continent={c.continent}
                    />
                ))
            }

        </div>

      </div>
    )

}