const mongoose = require('mongoose');
const config = require('config');
 
const connection = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/superhero",{
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        });
        console.log('Mongo Connected');
    }catch(err){
        console.error(err);
        process.exit(1);
    }
} 

module.exports = connection;