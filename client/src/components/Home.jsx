import  {React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../actions/actions';
import { sort , filteredByCont , filteredByAct } from '../actions/actions'
import Navbar from './NavBar';
import styles from './Home.module.css';
import { Country} from './Card'
import Pagination from './pagination';


export default function Home() {
    const dispatch = useDispatch()
    const {countries} = useSelector((state) => state)
    
    const [currentPage, setCurrentPage] = useState(1)
    const countriesPerPage = 10
    const countriesFirstPage = 9
    
    const pages = (pageNum) => {
      setCurrentPage(pageNum)
    }


    useEffect(() => {
        dispatch(getAll())  
    }, [] )

   

    function handleCont(e) {
        e.preventDefault()
        dispatch(filteredByCont(e.target.value))
    }

    function handleAct (e) {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(filteredByAct(e.target.value))
    }



    function handleSort(e) {
        e.preventDefault()
        dispatch(sort(e.target.value))
        setCurrentPage(1)

    }


    var indexOfLastCountry = currentPage * countriesPerPage 
    var indexOfirstCountry = indexOfLastCountry - countriesPerPage
    var currentCountries = countries.slice( indexOfirstCountry , indexOfLastCountry) 


    return (
        <div className={styles.container}>

        <Navbar
            handleSort={handleSort}
            handleCont={handleCont}
            handleAct={handleAct} 
        />

        <div className={styles.countryContainer}>

            {currentCountries 
            && currentCountries.map((c) => (
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
        
        <Pagination
        amountPerPage={countriesPerPage}
        totalAmount={countries.length}
        pageNumber={pages}
      />
      </div>
    )

}