const { Router } = require('express');
const router = Router()
const{ Country } = require('../db')

router.get('/', async (req, res) => {
   const names = await Country.findAll({ include: Activity }); // incluyo en la busqueda por actividades 
//    console.log("log desde country")

   res.send(names)
});

module.exports = router