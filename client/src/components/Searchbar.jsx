import  {React, useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../actions/actions";
import styles from './Searchbar.module.css'



export default function SearchBar(){
    const dispatch = useDispatch()
    const[value, setValue] = useState('')


    let handleChange = (e) =>{
        e.preventDefault()
        setValue(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByName(value))
        setValue('')
    }


    return(
        <div className={styles.container}>
        <input
          className={styles.input}
          type='text'
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder='Search countries...'
        />
        <button
          className={styles.button}
          onClick={(e) => handleSubmit(e)}
          type='submit'
        >
          Search
        </button>
      </div>
    )
}