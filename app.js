const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()

const api = require('./routes/api')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))
//Routes
app.use('/api',api)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((_)=>{
    app.listen(PORT,()=>{
        console.log(`Server Started at http://localhost:${PORT}`);
    })
}).catch((error)=>console.log(error))
