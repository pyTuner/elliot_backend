const mongoose = require("mongoose")
const config = require('../../config.js');

const connectToMongo = async () => {
    try {
        mongoose.connect(config.DATABASE.URL + config.DATABASE.NAME, 
           { useNewUrlParser : true, useUnifiedTopology: true },
        )
        console.log('connected to mongoose successfully!')
    } catch (err) {
        console.log(err.message)
    }
    
}


module.exports = connectToMongo;