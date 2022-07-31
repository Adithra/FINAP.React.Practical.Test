import { ACTION_TYPES } from "../actions/student";

const initialState = {
    list: []
}

export const student = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
       
        default:
            return state
    }
}