import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { createActivity, getAll } from "../actions/actions";




export default function Activity() {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

    const validate = (input) => {

        let error = {}

        if(!input.name){
            error.name = "Activity Name is required"
        }else if(/\d/.test(input.name)){
            error.name = "Activity Name is invalid , it should not have numbers"
        }else if(input.name.length > 20 ){
            error.name = "Activity name is to long"
        }

        if(input.duration.length > 20 ){
            error.name = "Duration is to long"
        }

        return error
    }



    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    })

    useEffect(() => {

        dispatch(getAll())

    }, [])

    function handleChange(e) {

        
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value
            }
        ));

        setInput({
            ...input,
            [e.target.name]: e.target.name === "countries" ? [...input.countries, e.target.value] : e.target.value
        })
    }

    function handleSumit(e) {
        e.preventDefault()
        dispatch(createActivity(input))
        alert('Activity Created!')
    }

    console.log(input)
    console.log(error)
    

    return (

        <div>
            <div>
                <form onSubmit={handleSumit}>
                    <h1> ADD touristic Activity </h1>
                    <div>
                        <label htmlFor="name" >Name:</label>
                        <input
                            type='text'
                            name='name'
                            placeholder="name"
                            onChange={handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <label htmlFor="name" >Difficulty:</label>
                        <select
                            type='text'
                            name='difficulty'
                            placeholder="Difficulty"
                            onChange={handleChange}
                        >
                            <option value="">difficulty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="duration" >Duration:</label>
                        <input
                            type='text'
                            name='duration'
                            placeholder="Duration"
                            onChange={handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <label htmlFor="season" >Season:</label>
                        <select
                            type='text'
                            name='season'
                            placeholder="Season"
                            onChange={handleChange}
                        >
                            <option value="">Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>


                    <div>
                        <label html='country'>Country:</label>
                        <select name="countries" onChange={handleChange} >
                            <option value="">Country</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.name}>{country.name} </option>
                            ))}
                        </select>
                    </div>

                    <ul>
                        <li>{input.countries?.map((country) => `${country}`)}</li>
                    </ul>

                    <button type='submit'>
                        Add Activity
                    </button>

                    <Link  to='/countries'>
                     <button>
                        Go Home!
                     </button>
                    </Link>

                </form>
            </div>
        </div>
    )


}