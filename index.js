const express = require('express');
// import express from "express";
const bodyParser = require('body-parser');
// const db = require('./server/core').database;
const config = require('./config.js');
const connectToMongo = require('./server/core/database.js');
const apiRouter = require('./server/api').router;



const app = express();
const port = Number(config.PORT2);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', apiRouter);

connectToMongo()
app.listen(port, () => { console.log(`server connected on Port: ${port}`) })    