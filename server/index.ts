import express from "express"
import cors from "cors"
import "dotenv/config"
import http from "http"

const app = express()
const server = http.createServer(app)
const { PORT } = process.env || 8080 

server.listen(PORT, () => {
    console.log(`SERVER START ON ${PORT}`)
})

app.use(cors())