import axios from 'axios';

let GET_ALL = 'GET_ALL'


export let getAll = () => {
    return async (dispatch) => {
        let response = await axios.get("http://localhost:3001/api/countries")
        dispatch({ type: GET_ALL, payload: response.data })
    }
}