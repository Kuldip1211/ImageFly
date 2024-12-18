import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import ConnectDb from './Config/mongodb.js';

const PORT = process.env.PORT ;
const app = express()


app.use(express.json());
app.use(cors)


// database
await ConnectDb()

app.get("/", (req, res) => {
 res.send("Api will mworking ")
})

app.listen(PORT, () => {
 console.log("Server listening on port :- " + PORT);
})