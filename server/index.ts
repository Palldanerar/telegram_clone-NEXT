import express from "express"
import "dotenv/config"
import http from "http"
import cors from "cors"
import mongoConnect from "./db/mongoConnect";
import userRouter from "./userRoutes"
import { Server } from "socket.io"
import { User } from "./Models/Users";
import jwt from "jsonwebtoken";

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

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {

    socket.on("joined", () => {
        io.sockets.emit("new-user", "new user joined")
    })

    socket.on("private message", async (to, message, mySelf) => {
        const user = await User.find({ email: to });
        const decoded = jwt.verify(mySelf, process.env.ACCESS_TOKEN_SECRET!);
        const sender = await User.findById(decoded);
        io.sockets.emit("refresh", "new Message");

        if (user) {
            user[0].messages.push({
                reciver: user[0].email,
                message,
                sender: sender?.email,
                time: new Date()
            })
            sender?.messages.push({
                reciver: user[0].email,
                message,
                sender: sender?.email,
                time: new Date()
            })
            await user[0].save();
            await sender?.save();
        }
    })

})

app.use("/", userRouter);