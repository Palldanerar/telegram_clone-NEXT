import express from "express"
import "dotenv/config"
import http from "http"
import cors from "cors"
import mongoConnect from "./db/mongoConnect";
import userRouter from "./userRoutes"

const app = express()
const server = http.createServer(app)
const { PORT } = process.env || 8080

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())

mongoConnect()
server.listen(PORT, () => {
    console.log(`SERVER START ON ${PORT} PORT!`)
})

app.use("/", userRouter);