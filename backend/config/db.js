let mongoose = require('mongoose')

let connectDB = async () => {
    try{
        let conn = await mongoose.connect('mongodb+srv://dachrisoufiane:soufiane123@cluster0.v0aig.mongodb.net/salma?retryWrites=true&w=majority')
        
        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB

