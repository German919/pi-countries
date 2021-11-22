import {GET_ALL_CONTRIES} from "../actions";

const initialState = {
    countries:[]
}

const rootReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_ALL_CONTRIES:{
            return{
                ...state,
                countries: [...state.countries, action.payload]
            }
        }
        default:
            return state
    }
}

export default rootReducer;