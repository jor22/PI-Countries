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
const { conn  } = require('./src/db.js');
const axios = require('axios')
const { Country } = require('./src/db');

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    axios.get(`https://restcountries.com/v3/all`)
    .then(async  response => {
      response.data.forEach( async country => {
        await Country.create({
          id: country.cca3,
          name: country.name.common,
          officialName: country.name.official,
          flag: country.flags[0], 
          continent: country.region ,
          capital: country.capital ? country.capital[0] : 'No have Capital', 
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        }); 

      });

    });

  });

});
