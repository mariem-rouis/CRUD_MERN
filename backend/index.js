const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
const app = express();

//add Schema
const students = require("./models/studSchema")
dotenv.config();


app.use(cors());

mongoose.connect(process.env.Database)
    .then(() => {
        console.log(' dataBase connection done');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(6000)