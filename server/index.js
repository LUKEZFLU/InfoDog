import { promises as fs } from 'fs'
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import models from './models.js'
import apiV1Router from './routes/v1/apiv1.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

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

app.listen(3000, () => {
    console.log("server is running on localhost 3000")
})