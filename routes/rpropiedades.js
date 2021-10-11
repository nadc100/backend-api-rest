const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');


router.get('/:id', async (req, res) => {
    try{
       const Propiedad= await Propiedad.findById(req.params.id).exec();
       console.log(Propiedad)
       res.send(Propiedad);
    }catch(err){
       return res.status(500).send({
        message: err.message
      });
    }} );


module.exports = router;