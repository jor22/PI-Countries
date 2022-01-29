import axios from 'axios';

export const GET_ALL = 'GET_ALL'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_DETAILS = 'GET_DETAILS'


export let getAll = () => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/countries")
        console.log(response.data)
        dispatch({ type: GET_ALL, payload: response.data })
    }
}

export let getByName = (name) => {
    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/countries?name=${name}`)
        dispatch({type: GET_BY_NAME, payload:  response.data})
    }

}

export let getCountryDetails = (id) => { 
    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/countries/${id}`)
        dispatch({ type: 'GET_DETAILS',payload: response.data,})
    }
}