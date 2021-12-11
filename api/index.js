//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const {Country} = require("./src/db")
const axios = require('axios');

/**LLAMAMOS A LA API */
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
              population: res.population,
              maps: res.maps.googleMaps
          }
      }
  )
  return data;
  
  }catch (err) {
      console.log(err);
  }
}

const countriesTableLoad = async () => {
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
               maps: el.maps
           }
       })
   })
}

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  countriesTableLoad();

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
