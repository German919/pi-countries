import axios from "axios";

export const GET_ALL_CONTRIES = "GET_ALL_CONTRIES";
export const FILTER_BY_CONTINENTS = "FILTER_BY_CONTINENTS";
export const SEARCH_BY_NAME ="SEARCH_BY_NAME";
export const ORDER_ASC_DESC = "ORDER_ASC_DESC";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";

export const getAllContries = () => {
    return async function(dispatch) {
        const countries = await axios.get("http://localhost:3001/countries")
        return dispatch({ 
            type : GET_ALL_CONTRIES,
            payload : countries.data
            }
        )
    }
}

export const filterByContinents = (payload) => {
    return { 
        type : FILTER_BY_CONTINENTS,
        payload 
    }
}

export const searchByName = (name) => {
    return async function(dispatch) {
        const filterName = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: filterName.data
        })
    }
}

export const orderAscDesc = (value) => {
    return { 
        type: ORDER_ASC_DESC,
        payload: value
    }
}

export const orderByPopulation = (value) => {
    return { 
        type: ORDER_BY_POPULATION,
        payload: value
    }
}

export const postActivity = (activity) => {
    return async function(dispatch) {
        const newActivity = await axios.post("http://localhost:3001/activity", activity)
        return dispatch({
            type: CREATE_ACTIVITY,
            payload: newActivity
        })
    }
 }

 export const getAllActivities = () => {
    return async function(dispatch) {
        const activities = await axios.get("http://localhost:3001/activities")
        return dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: activities.data
        }) 
    }
 }