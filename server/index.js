import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

const CONNECTION_URL = ''

mongoose
  .connect(CONNECTION_URL, { useUnifiedTopology: true, useFindAndModify: true })
  .then(() => console.log('connected to DB'))
  .catch(err => console.log(err.message))

const PORT = process.env.PORT || 5000
