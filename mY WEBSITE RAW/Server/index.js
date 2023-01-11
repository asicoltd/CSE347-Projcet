const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TeamModel = require('./models/Teams')
const MatchesModel = require('./models/Matches')
const StatsModel = require('./models/Stats')
mongoose.connect("mongodb+srv://Asif:Password@cse347.bejatjw.mongodb.net/T20Website?retryWrites=true&w=majority")
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.get("/getMatches",(req,res) =>{
    MatchesModel.find({},(err,result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.get("/getTeams",(req,res) =>{
    TeamModel.find({},(err,result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})
app.get("/1getTeams",(req,res) =>{
    const team = req.query.p || 0
    const teamPerPage = 3

    TeamModel
    .find()
    .sort({Ranking:1})
    .skip(team * teamPerPage)
    .limit(teamPerPage)
    .then((teams)=>{
        teams.forEach( team => teams.push(team))
        res.status(200).json(teams)
    })
    .catch(()=>{
        res.status(500).json({error:"fetching error"})
    })
})

app.get("/getStats",(req,res) =>{
    StatsModel.find({},(err,result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})
app.post("/createMatches", async (req,res) =>{
    const match = req.body
    const newMatch = new MatchesModel(match)
    await newMatch.save()

    res.json(match)
})

app.listen(3001,() =>{
    console.log("Server is running")
})