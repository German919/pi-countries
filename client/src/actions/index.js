import axios from "axios";

export const GET_ALL_CONTRIES = "GET_ALL_CONTRIES";
export const FILTER_BY_CONTINENTS = "FILTER_BY_CONTINENTS";
export const SEARCH_BY_NAME ="SEARCH_BY_NAME";
export const ORDER_ASC_DESC = "ORDER_ASC_DESC";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION"

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
        console.log(name)
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