const { Router } = require('express');
const router = Router()
const{ Country } = require('../db')

router.get('/', async (req, res) => {
   const names = await Country.findAll();
   console.log("log desde country")
   res.send(names)
});

module.exports = router