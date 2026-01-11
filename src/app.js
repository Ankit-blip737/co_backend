import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))//thid config used to store json upcoming data
app.use(express.urlencoded({extended: true,limit: "16kb"}))//this config used to store url data 
app.use(express.static("public"))//folder used to store images and all

app.use(cookieParser())

export { app }