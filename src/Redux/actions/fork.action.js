import axios from 'axios'

export const GET_FORKS = 'GET_FORKS';


export const getForksThunk = () => {
    return async dispatch => {
        const response = await axios.get(`${process.env.PORT}/fork`)
        dispatch({
            type: GET_FORKS,
            payload: response.data
        })
    }
}