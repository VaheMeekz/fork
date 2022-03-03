import { GET_FORKS } from "../actions/fork.action"

const initialState = {
 forks:[]
}

export const forkReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_FORKS:
            return {
                ...state,
                forks: action.payload
            }
        default:
            return state
    }
}