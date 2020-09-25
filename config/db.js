const mongoose = require('mongoose');
const config = require('config');
const dbUri = config.get('mongoUri');
 
const connection = async () =>{
    try {
        await mongoose.connect(dbUri,{
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
        console.log('Mongo Connected');
    }catch(err){
        console.error(err);
        process.exit(1);
    }
} 

module.exports = connection;