import express from "express"
import "dotenv/config"
import http from "http"
import cors from "cors"
import mongoConnect from "./db/mongoConnect";
import userRouter from "./userRoutes"

const app = express()
const server = http.createServer(app)
const { PORT } = process.env || 8080

app.use(cors())
app.use(express.json())
app.use("/", userRouter);

mongoConnect()
server.listen(PORT, () => {
    console.log(`SERVER START ON ${PORT} PORT!`)
})