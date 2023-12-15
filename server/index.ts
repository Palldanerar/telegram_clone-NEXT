import express from "express"
import "dotenv/config"
import http from "http"
import cors from "cors"
import mongoConnect from "./db/mongoConnect";

const app = express()
const server = http.createServer(app)
const { PORT } = process.env || 8080

app.use(cors())

mongoConnect()
server.listen(PORT, () => {
    console.log(`SERVER START ON ${PORT} PORT!`)
})