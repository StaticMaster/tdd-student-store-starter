// const express= require("express")
import express, {json} from "express"
import morgan from "morgan"
import storeRouter from "./routes/store.js"
import Store from "./models/store.js"
import { NotFoundError, BadRequestError } from "./utils/errors.js" 
// const morgan = require("morgan")
// const Store = require("./models/store")
const app= express()  
// const router = express.Router()
// const storeRouter = require("./routes/store")
// const {NotFoundError, BadRequestError} = require("./utils/errors")

app.use("/store", storeRouter)
app.use (morgan('tiny'))
app.use(express.json())


app.get('/', (req, res) => {
 const key= req.params.name
res.status(200).json({"ping": "pong" })
  })
  
  app.use((req, res, next) =>{
 return next(new NotFoundError("that page was not found"))
  })

  app.use((error, req, res, next)=>{
let status = error.status || 500
let message = error.message || "Something went wrong"
return res.status(status).json ({error:{status, message}})
  })



export default app;
// module.exports = app;
