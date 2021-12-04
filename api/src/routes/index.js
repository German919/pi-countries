const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Country, Activity} = require('../db');
const { Op } = require('sequelize');

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
                capital: res.capital ? res.capital.map(el => el):["no data"],
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

    const name = req.query.name;
    
    try{  
        if(!name){
            const countries = await getAll();
            countries.map((el) => {
                    Country.findOrCreate({
                    where: {name:el.name},
                    defaults:{
                        id:el.id, 
                        name:el.name, 
                        image:el.img, 
                        continent:el.continent, 
                        capital:el.capital, 
                        subregion:el.subregion, 
                        area:el.area, 
                        population:el.population,
                    }
                })
            })
            const countriesAll = await Country.findAll({
                include: {model: Activity}
            });
            res.status(200).send(countriesAll)
        }else{
            const newName = name.charAt(0).toUpperCase() + name.slice(1);
            const country = await Country.findAll({
                include: Activity,
                where:{
                   name : {[Op.iLike]: `%${newName}%`}
                }
            })
            country.length ? res.status(200).send(country)
            : res.status(404).send("No countries found")
        }
    }catch(err){
        console.log(err)
    }       
});

router.get("/countries/:id", async (req, res)=>{
    const id = req.params.id;
    try{
        const country = await Country.findByPk(id.toUpperCase(), {
            include: Activity,
        });
        if(country){
            return res.status(200).send(country)
        }
        res.status(404).send("No countries found")
    }catch (err) {
        console.log(err)
    }
});

router.post("/activity", async (req, res)=>{
    const {name, difficulty, duration, season, idCountry} = req.body;
    const activity = await Activity.create({ 
        name, difficulty, duration, season
    })
    const country = await Country.findAll({
        where: {
            id : idCountry
        },
        attributes: ["id"]
    });
    activity.addCountry(country);
    res.status(200).json({message:"Activity created successfully", c: country});
});

router.get("/activities", async (req, res)=>{
    try {
        const activities = await Activity.findAll({});
        res.status(200).send(activities);

    }catch (err) {
        console.log(err)
    }
})


module.exports = router;
