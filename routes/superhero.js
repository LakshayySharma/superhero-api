const express = require('express');
const router = express.Router();
const Superhero = require('../models/Superhero');
const config = require('config');
router.get('/',async (req,res)=>{
    const superheroes =await Superhero.find();
    res.json({superheroes});

     
})

router.post('/',async (req,res)=>{
    const {name, powers, description} = req.body
    try{
        const superhero = new Superhero({name,powers,description});
        await superhero.save();
        res.json({superhero});
    }
    catch(err){
        console.error(err);
    }
    
});

router.get('/:id',(req,res)=>{
    res.send(`Get a super hero`);
})

router.put('/:id',(req,res)=>{
    res.send(`Edit a super hero`);
})

router.delete('/:id',(req,res)=>{
    res.send(`Delete a super hero`);
})

module.exports = router;