const express = require('express');
require("dotenv").config()
const connectDB = require('./config/db');
const morgan = require('morgan');

const serviceRoute = require("./routes/services")

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(morgan('tiny'))



app.use("/api/service", serviceRoute)

const start = () => {
    try {
        connectDB()
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()