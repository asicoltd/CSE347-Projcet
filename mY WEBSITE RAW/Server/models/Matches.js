const mongoose = require('mongoose')
const MatchesSchema = new mongoose.Schema({
    Time:{
        type:Number,
        nested:{
            day:{type:Number},
            month:{type:Number},
            year:{type:Number},
            time:{type:Number},
        },
        required:false,
    },
    Team1:{
        type:String,
        required:true,
    },
    Team2:{
        type:String,
        required:true,
    },
    MatchNo:{
        type:Number,
        required:true,
    },
})


const MatchesModel = mongoose.model("Matches",MatchesSchema)

module.exports = MatchesModel