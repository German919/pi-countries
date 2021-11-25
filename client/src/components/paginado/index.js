import React from 'react';
import styles from './index.module.css';

const Paginado = ({countries, paginado, countriesPerPage}) => {

    const pageNumber = [];
    
    for( let i = 1; i <= Math.ceil(countries / countriesPerPage); i++ ){
        pageNumber.push(i)
    }
    
    return(
        <nav>
            <ul className={styles.lista}>
                {
                    pageNumber &&
                    pageNumber.map( (number, i) => (
                        <li className={styles.li} key={i}>
                            <a onClick={()=> paginado(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;