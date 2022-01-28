var mongoose  =  require('mongoose');

var csvSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    ID:{
        type:String
    },
    Country:{
        type:String
    },
    FatherName:{
        type:String
    },
    MotherName:{
        type:String
    },

    Test1:{
        type:Number
    },
    Test2:{
        type:Number
    }});

module.exports = mongoose.model('studentsrecords',csvSchema);