const express = require('express');
const router = express.Router();
const Superhero = require('../models/Superhero');
const config = require('config');
router.get('/',async (req,res)=>{
    const superheroes =await Superhero.find();
    res.json({superheroes});

     
})

router.post('/',async (req,res)=>{
    const {name, powers, description, image} = req.body
    try{
        const superhero = new Superhero({name,powers,description,image});
        await superhero.save();
        res.json({superhero});
    }
    catch(err){
        console.error(err);
    }
    
});

router.get('/:id',async (req,res)=>{
    try{
        const superhero = await Superhero.findById(req.params.id);
        res.json(superhero);    
    }catch(err){
        console.error(err);
    }
    
})

router.patch('/:id',async (req,res)=>{
    try{
        
        const superhero = await Superhero.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(superhero);
        


    }catch(err){
        console.error(err);
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const superhero = await Superhero.findById(req.params.id);
        await superhero.remove();
        const msg = 'Deleted successfully';
        res.json(msg);
    }catch(err){
        console.error(err);
    }
})

module.exports = router;