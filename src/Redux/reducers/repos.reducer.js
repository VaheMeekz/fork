import { GET_REPOS } from "../actions/repos.action"

const initialState = {
 repos:[]
}

export const reposReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}