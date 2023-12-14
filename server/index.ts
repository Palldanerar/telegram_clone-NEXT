import express from "express"
import "dotenv/config"
import http from "http"
import cors from "cors"

const app = express()
const server = http.createServer(app)
const { PORT } = process.env || 8080

app.use(cors())

server.listen(PORT, () => {
    console.log(`SERVER START ON ${PORT} PORT!`)
})