import axios from 'axios'

export const GET_REPOS = 'GET_REPOS';


export const getCountriesThunk = () => {
    return async dispatch => {
        const response = await axios.get(`${process.env.PORT}/repo`)
        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }
}