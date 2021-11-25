import React from 'react';
import {useDispatch} from "react-redux";
import { filterByContinents } from '../../actions';

const FilterByContinents = () => {

    const dispatch = useDispatch();

    const filterContinents = (e) => {
        dispatch(filterByContinents(e.target.value))
    }
 
    return (

        <div>
            <h3>Filtrar por continente</h3>
            <div>
                <input onChange={filterContinents} type="radio" name="countries"  value="All"/>
                <label>Todos</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries"  value="Africa"/>
                <label>Africa</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries" value="Oceania"/>
                <label>Oceania</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries" value="Europe"/>
                <label>Europa</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries" value="South America"/>
                <label>Sur America</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries" value="North America"/>
                <label>Norte America</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries" value="Asia"/>
                <label>Asia</label>
            </div>
            <div>
                <input onChange={filterContinents} type="radio" name="countries" value="Antarctica"/>
                <label>Antarctica</label>
            </div>
        </div>
    )
}

export default FilterByContinents;