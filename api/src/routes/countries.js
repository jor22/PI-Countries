const { Router } = require('express');
const router = Router()
const{ Country } = require('../db')

router.get('/', async (req, res) => {
   const names = await Country.findAll(); //   { include: Activity }  --> incluyo en la busqueda por actividades 

    if (req.query.name) {

    let { name } = req.query
    
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()

    const found = await Country.findAll({
        where: { name: { [Op.substring]: name } },
    })
    
    return res.json(found)
  }

   res.send(names)
});


router.get('/:id', async (req, res) => {

    const id = await Country.findByPk(req.params.id.toUpperCase(),);
    
    if (!id) {
      return res.status(404).send('Error: country not found')
    };
    
    console.log(id)
    return res.json(id);
  })

module.exports = router