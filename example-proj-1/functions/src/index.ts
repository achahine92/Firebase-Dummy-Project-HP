import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectToMongoDB } from "./middleware/establishConnection"
import characterRouter from "./routes/characterRouter"

// Load env vars
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/characters", characterRouter)

// Connect to external services
connectToMongoDB()
  .then(() => console.log("🟢 Ready for API requests"))
  .catch(err => console.error("🔴 Connection error:", err))

app.get("/", (req, res) => {
  res.send("Hello from Firebase backend with MongoDB 🎉")
})

app.get("/test", (req, res) => {
  res.send("🔥 Hello from Express inside Firebase!");
});

export const api = functions.https.onRequest(app)
