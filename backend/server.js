const express = require("express")
const colors = require("colors")
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");
const {router} = require("./routes/authRoute")
const cors = require("cors")

//database config
connectDB()

app.use(cors())

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use('/api/v1/auth', router)


//rest api
app.get("/", (req, res) =>{
    res.send( "<h1>Welcom to ecommmerce app</h1>" ) 
} )


//root
const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on ${port}`.bgCyan.white);
})