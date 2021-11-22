import axios from "axios";

export const GET_ALL_CONTRIES = "GET_ALL_CONTRIES";

// const getAll = (countries) => {
//     return {
//         type: "GET_ALL_CONTRIES",
//         payload: countries
//     }
// }
export const getAllContries = () => {
    return async function(dispatch) {
        const countries = await axios.get("http://localhost:3001/countries")
        return dispatch({ 
            type:GET_ALL_CONTRIES,
            payload:countries.data
            
            }
        )
    }
}