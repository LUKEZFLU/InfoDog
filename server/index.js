// packages
import { promises as fs } from 'fs'
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

// models
import models from './models.js'

//api
import apiV1Router from './routes/v1/apiv1.js'


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// set the app
var app = express();


// app.use
app.use(cors({
    origin: 'http://localhost:3000' // listen from client side on port 3000
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setup models
app.use((req, res, next) => {
    req.models = models
    next()
})

// api calls
app.use("/api/v1", apiV1Router)


// Listen
app.listen(3001, () => {
    console.log("server is running on localhost 3001")
})