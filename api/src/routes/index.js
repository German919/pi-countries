const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Country, Activity} = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getAll = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3/all")
        const data = await response.data.map(res => {
           
            return {

                id : res.cca3,
                name: res.name.common && res.name.common,
                img: res.flags && res.flags.map(flag => flag), 
                continent: res.continents && res.continents.map(el => el),
                capital: res.capital ? res.capital.map(el => el):["sin datos"],
                subregion: res.subregion,
                area: res.area,
                population: res.population
            }
        }
    )
    return data;

    }catch (err) {
        console.log(err);
    }
}

router.get("/countries", async (req, res)=>{
    const countries = await getAll();
    const name = req.query.name;
    
    try{  
        if(!name){
            countries.map(el => {
                
                Country.findOrCreate({
                    where: {name:el.name},
                    defaults:{
                        id:el.id, name:el.name, image:el.img, 
                        continent:el.continent, capital:el.capital,
                        subregion:el.subregion, area:el.area, 
                        population:el.population,
                    }
                })
            })
            const countriesAll = await Country.findAll();
            res.status(200).send(countriesAll)
        }else{
            const country = await countries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            countries.length ? res.status(200).send(country)
            : res.status(404).send("No se encontraron paises")
            console.log(country)
        }
    }catch(err){
        console.log(err)
    }       
});

router.get("/countries/:id", async (req, res)=>{
    const id = req.params.id;
    try{
        const country = await Country.findByPk(id.toUpperCase());
        if(country){
            return res.status(200).send(country)
        }
        res.status(404).send("No hay pais")
    }catch (err) {
        console.log(err)
    }
});

router.post("/activity", async (req, res)=>{
    const {id, name, difficulty, duration, season} = req.body;
    const activity = await Activity.create({ 
        id, name, difficulty, duration, season
    })
    res.status(200).send(activity);
})


module.exports = router;
