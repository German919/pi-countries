import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllContries} from "../../actions";
import Card from "../card/Card";
import styles from "./home.module.css";
import Paginado from "../paginado";
import FilterByContinents from '../filterByContinents';
import SearchCountries from "../searchCountries"
import OrderAscDesc from '../orderAscDesc';
import OrderByPopulation from '../orderPopulation';


const Home = () => {
    
    const [order, setOrder] = useState("");
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1); //comienza en la pagina 1
    const [countriesPerPage, setCountriesPerPage] = useState(9); // cada pagina tiene 9 countries
    const indexOfLastCountry = currentPage * countriesPerPage; //9
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    const currentCountries = countries && countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (page) => {
        setCurrentPage(page)
    }
    useEffect(() => {
        dispatch(getAllContries())
    },[]);

    const handleRecargar = () => {
        dispatch(getAllContries())
    }
    
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <button onClick={handleRecargar}>Recargar pagina</button>
                </div>

                <SearchCountries />
              
                <FilterByContinents /> 

                <div>
                    <button>Crear Actividad</button>
                </div>
        
            </div>

            <div>
                <div>

                    <OrderByPopulation
                        setCurrentPage={setCurrentPage} 
                        setOrder={setOrder} />

                    <OrderAscDesc 
                        setCurrentPage={setCurrentPage} 
                        setOrder = {setOrder}    
                        />

                    <div>
                        <select>
                            <option value="">actividades1</option>
                            <option value="">actividades2</option>
                        </select>
                    </div>

                    <div>
                        <Paginado 
                            countries={countries && countries.length} 
                            paginado={paginado} 
                            countriesPerPage={countriesPerPage}
                            />
                    </div>

                </div>
                
                <div className={styles.grid}>
                    {
                        currentCountries.length > 0 ? 
                        currentCountries.map( (el, i) => (
                                <Card 
                                    key={i} 
                                    image={el.image} 
                                    name={el.name} 
                                    continent={el.continent} 
                                />
                            ))
                        : <h1>cargando...</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;