import React, { useEffect, useState } from 'react';
import styles from './pageCreate.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllContries, postActivity} from "../../actions"
import stylesLoading from "../home/loading.module.css";
import {useHistory} from "react-router-dom";

const validate = (value) => {

    const errors ={};

    if(!value.name){
        errors.name = "Required field name"
    }else if(!value.difficulty){
        errors.difficulty = "Required field difficulty"
    }else if(!value.duration){
        errors.duration = "Required field duration"
    }else if(!value.season){
        errors.season = "Required field season"
    }else if(value.idCountry.length === 0){
        errors.idCountry = "Required field country"
    }
    console.log(value.idCountry)
    return errors;

}

const PageCreate = () => {

    const imagen = "https://imagenes.elpais.com/resizer/poLxVzmwPheHVMXrqCcigjqj9BE=/414x311/filters:focal(436x272:446x282)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GGWILMLEOATEMMU4WZDAG32W4Y.jpg";

    const history = useHistory()

    const [error, setError] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        idCountry:[]
    })
    const [data, setData] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        idCountry:[]

    })
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    useEffect(()=>{
        dispatch(getAllContries())
    },[]);

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const handleDifficulty = (e) => {
        setData({
            ...data,
            difficulty : e.target.value
        })
    }
    const handleSeason = (e) => {
        setData({
            ...data,
            season : e.target.value
        })
    }
    const handleSelectCountries = (e) => {
        setData({
            ...data,
            idCountry:[...data.idCountry, e.target.value]
        })
    }
    
    const handleDelete = (idCountry) => {
        data.idCountry &&  setData({
            ...data,
            idCountry : data.idCountry.filter(id => id !== idCountry)
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validate(data))
        console.log(error)
        if(Object.keys(validate(data)).length === 0){
            dispatch(postActivity(data))
            setData({
                name:"",
                difficulty:"",
                duration:"",
                season:"",
                idCountry:[]
            })
        }
    }
    const handleBackPage = (e) => {
        history.push("/home")
    }

    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.containerBtns}>
                <button onClick={handleBackPage} className={styles.containerFormBtn}>Back</button>
            </div>

            <div className={styles.container}>
            {
                countries.length > 0 ?
                <>
            
                <div className={styles.containerImg}>
                    <img className={styles.imagen} src={imagen} alt="imagen"/>
                </div>
                <div className={styles.containerForm}>
                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                        >
                        <div className={styles.containerFormAll}>
                            <label className={styles.labelActivity}>Name Activity: </label> 
                            <input 
                                type="text"
                                name="name"
                                className={styles.inputActivity}
                                value={data.name}
                                onChange={handleInput}    
                                />
                                {
                                    error.name && <p className={styles.errorName}>{error.name}</p>
                                }
                        </div>
                        <div className={styles.containerFormAll}>
                            <label className={styles.labelActivity}>Difficulty: </label>
                            <select className={styles.selectActivity} onChange={handleDifficulty}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {
                                error.difficulty && <p className={styles.errorDifficulty}>{error.difficulty}</p>
                            }
                        </div>
                        <div className={styles.containerFormAll}>
                            <label className={styles.labelActivity}>Duration: </label>
                            <input 
                                type="text"
                                name="duration"
                                className={styles.inputActivity1}
                                value={data.duration}
                                onChange={handleInput}     
                                />
                            {
                                error.duration && <p className={styles.errorDuration}>{error.duration}</p>
                            }
                        </div>
                        <div className={styles.containerFormAll}>
                            <label className={styles.labelActivity}>Season: </label>
                            <select className={styles.selectActivity1} onChange={handleSeason}>
                                <option value="Verano">Summer</option>
                                <option value="Otoño">Autumn</option>
                                <option value="Invierno">Winter</option>
                                <option value="Primavera">Spring</option>
                            </select>
                            {
                                error.season && <p className={styles.errorSeason}>{error.season}</p>
                            }
                        </div>
                        <div className={styles.containerFormAll}>
                            <label className={styles.labelActivity}>Select countries</label>
                            <select className={styles.selectActivity2} onChange={handleSelectCountries}>
                                {
                                    countries.map((country, i) => (
                                        <option key={i} value={country.id}>{country.name}</option>
                                    ))
                                }
                            </select>
                            {
                                error.idCountry && <p className={styles.errorId}>{error.idCountry}</p>
                            }
                        </div>
                        <div className={styles.containerFormAll}>
                            <button className={styles.containerFormBtn}>Create</button>
                            {/* <button onClick={handleCancel} className={styles.containerFormBtn}>Cancel</button> */}
                        </div>
                       
                    </form>
                </div>
                </>
                : 
                <div className={stylesLoading.ldsSpinner}><div></div><div></div>
                                <div></div><div></div><div></div><div></div><div>
                                </div><div></div><div></div><div></div><div></div>
                                <div></div></div>
            } 
            </div>  
            <div className={styles.containerCountriesSelect}>

                {
                    data.idCountry && data.idCountry.map( (country, i) => (
                        <div  
                            className={styles.containerCountriesSelectOne}
                            key={i}
                        >
                            <i  
                                className="fas fa-trash-alt"  
                                onClick={()=>handleDelete(country)}
                                ></i>
                            <h4>{country}</h4>
                        </div>
                    ))
                }

            </div>
            
        </div>
    )
}

export default PageCreate;