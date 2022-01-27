const { Router } = require('express');
const { Country, Activity } = require('../db.js')
const router = Router()


router.post('/', async (req, res) =>{
    // crear actividad y hacer la relacion con el coutry 
    // try-catch
    const { country ,name ,difficulty,duration,season } = req.body

    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })

    const countryNames = await Country.findAll({ where: { name: country } }); //busco el name en db countries
    console.log(countryNames);
    
    await createActivity.addCountries(countryNames);  //addCountries mixer de sequelize 

    res.json(createActivity);

});




module.exports = router