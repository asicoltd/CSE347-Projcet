const mongoose = require('mongoose')
const TeamSchema = new mongoose.Schema({
  Matches: {
    type: Number,
    required: true,
},
  Points: {
    type: Number,
    required: true,
},
  Ranking: {
    type: Number,
    required: true,
},
  Rating:  {
    type: Number,
    required: true,
},
  ShortName:  {
    type: String,
    required: true,
},
  TeamName: {
    type: String,
    required: true,
},
players:{
        type:Array,
        require:true,
},
})

const TeamModel = mongoose.model("Teams",TeamSchema)

module.exports = TeamModel