import express from "express"
import bodyParser from "body-parser"
import Questions from "./src/questions.js"
import OkRedFlagDealbreaker from "./src/okredflagdealbreaker.js"
import NeverHaveIEver from "./src/neverhaveiever.js"
import Games from "./src/games.js"

const app = express()
const port = 3000

app.use(bodyParser.json())

let games: Game[] = Games
let questions: Question[] = Questions 
let okredflagdealbreaker: OkRedFlagDealBreaker[] = OkRedFlagDealbreaker
let neverhaveiever: NeverHaveIEver[] = NeverHaveIEver

// GET endpoint to error message
app.get('/', (req, res) => {
    res.json({error: "Invalid endpoint. Please use /games for overview of what games exist."})
})

// GET endpoint to retrieve all questions
app.get('/games', (req, res) => {
    const Games = JSON.stringify(games);
    res.header("Content-Type", "application/json");
    res.send(Games);
})

// GET endpoint to retrieve all questions
app.get('/questions', (req, res) => {
    const Questions = JSON.stringify(questions);
    res.header("Content-Type", "application/json");
    res.send(Questions);
})

// GET endpoint to retrieve all ok, red flag or dealbreaker questions
app.get('/okredflagdealbreaker', (req, res) => {
    const Okredflagdealbreaker = JSON.stringify(okredflagdealbreaker);
    res.header("Content-Type", "application/json");
    res.send(Okredflagdealbreaker);
})

// GET endpoint to retrieve all never have I ever questions
app.get('/neverhaveiever', (req, res) => {
    const Neverhaveiever = JSON.stringify(neverhaveiever);
    res.header("Content-Type", "application/json");
    res.send(Neverhaveiever);
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
