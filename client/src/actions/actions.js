import axios from 'axios';

export const GET_ALL = 'GET_ALL'
let GET_BY_NAME = 'GET_BY_NAME'


export let getAll = () => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/countries")
        dispatch({ type: GET_ALL, payload: response.data })
    }
}

export let getByName = (name) => {
    return async (dispatch) => {
    let response = await axios.get(`http://localhost:3001/countries?name=${name}`)
    dispatch({type: GET_ALL, payload: response.data})
}

}