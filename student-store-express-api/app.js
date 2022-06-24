const express= require("express")
const app= express()  
const router = express.Router()

app.get('/', (req, res) => {
 const key= req.params.name
res.status(200).json({"ping": "pong" })
  })

  
module.exports = router
