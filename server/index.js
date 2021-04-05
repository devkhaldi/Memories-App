import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(cors())
app.use(express.json({ limit: "30mb" }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

const CONNECTION_URL =
  "mongodb+srv://admin:Khaldi2000@node-rest-shop.uem3d.mongodb.net/Memories?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch(err => console.log(err.message))

mongoose.set("useFindAndModify", false)

// Routes
app.use("/posts", postRoutes)
