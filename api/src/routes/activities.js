const { Router } = require('express');
const { Country, Activity } = require('../db.js')
const router = Router()


router.post('/', async (req, res) =>{

    console.log(req.body)
    const { countries ,name ,difficulty,duration,season } = req.body


    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })

    const countryNames = await Country.findAll({ where: { name: countries } }); //busco el name en db countries
    console.log(countryNames);
    
    await createActivity.addCountries(countryNames);  //addCountries mixer de sequelize 

    res.json(createActivity);

});




module.exports = router