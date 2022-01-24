const { Router } = require('express');
const { Country, Activity } = require('../db.js')
const router = Router()


// router.get('/', (req, res) => {
//     res.send("Hello World  from activities")
// });


router.post('/', async (req, res) =>{
    // crear actividad y hacer la relacion con el coutry 
    const { name } = req.body

    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    })

    const exist = await Activity.findOne({ where: { name: name } });
    if (exist) return res.json({ info: "La Actividad ya existe" });

    console.log(createActivity)
    res.json(createActivity)

});


module.exports = router