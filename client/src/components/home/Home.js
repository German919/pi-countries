import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllActivities, getAllContries} from "../../actions";
import Card from "../card/Card";
import styles from "./home.module.css";
import stylesLoading from "./loading.module.css";
import Paginado from "../paginado";
import FilterByContinents from '../filterByContinents';
import SearchCountries from "../searchCountries"
import OrderAscDesc from '../orderAscDesc';
import OrderByPopulation from '../orderPopulation';
import SearchActivity from '../searchActivity';
import CreateActivity from '../createActivity';
import {useHistory} from "react-router-dom";


const Home = () => {

    const history = useHistory();
    
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);

    const [order, setOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1); 
    const [countriesPerPage, setCountriesPerPage] = useState(10); 
    
    const indexLast = currentPage * countriesPerPage; 
    const indexFirst = indexLast - countriesPerPage;  
    
    const currentCountries = countries && countries.slice(indexFirst, indexLast);

    const paginado = (page) => {
        setCurrentPage(page)
        // if(page === 1){
        //      setCountriesPerPage(9)
        // }else{
        //      setCountriesPerPage(10)
        // }
    }

    useEffect(() => {
        dispatch(getAllContries())
    },[]);

    useEffect(() => {
        dispatch(getAllActivities())
    },[])

    const handleRecargar = () => {
        dispatch(getAllContries())
    }

    const handleBackPage = () => {
        history.push("/")
    }
    
    return(
        <div className={styles.container}>
            <nav className={styles.containerSuperior}>
                <div>
                     
                    <button 
                        onClick={handleBackPage}
                        className={styles.BtnReloadCountries}
                        > <i className="fas fa-step-backward"></i> Back
                    </button> 
                </div>
                
                <div>
                    <button 
                        onClick={handleRecargar}
                        className={styles.BtnReloadCountries}
                        >Reload countries
                    </button>
                </div>

                <OrderByPopulation
                    setCurrentPage={setCurrentPage} 
                    setOrder={setOrder} 
                />

                <OrderAscDesc 
                    setCurrentPage={setCurrentPage} 
                    setOrder = {setOrder}    
                />

                <SearchActivity 
                    activities = {activities} 
                    setOrder = {setOrder}  
                    setCurrentPage = {setCurrentPage}  
                    />

            </nav>              
            
            <div className={styles.containerInferior}> 

                <div className={styles.containerInferiorSub1}>

                    <SearchCountries setCurrentPage={setCurrentPage}/>
              
                    <FilterByContinents setCurrentPage={setCurrentPage}/> 

                    <CreateActivity />

                </div>

                <div className={styles.containerInferiorSub2}>
                    <div className={styles.containerInferiorsub2Pag}>
                        <Paginado 
                            countries={countries && countries.length} 
                            paginado={paginado} 
                            countriesPerPage={countriesPerPage}
                        />
                    </div>
                    
                    <div className={currentCountries.length < 3 ? styles.flexContainer : styles.grid}>
                        {
                            currentCountries.length > 0 ? 
                            currentCountries.map( (el, i) => (
                                    <Card 
                                        key={i} 
                                        id={el.id}
                                        image={el.image} 
                                        name={el.name} 
                                        continent={el.continent} 
                                        population={el.population}
                                    />
                                ))
                            :<div className={stylesLoading.containerLoading}> 
                            <div className={stylesLoading.ldsSpinner}><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div>
                            </div><div></div><div></div><div></div><div></div>
                            <div></div></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;