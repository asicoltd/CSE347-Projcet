const mongoose = require('mongoose')
const StatsSchema = new mongoose.Schema({
    field:{
        type:String,
        require:true,
},player:{
    type:Array,
    require:true,
},
})


const StatsModel = mongoose.model("Stats",StatsSchema)

module.exports = StatsModel