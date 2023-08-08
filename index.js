const express = require('express');
const config = require('./config.js');
const apiRouter = require('./server/api').router;


const app = express();
const port = config.PORT2;

// app.get('/', (req, res) => {
//     res.send('Hello');
// })

app.use('/', apiRouter);

app.listen(port, () => { console.log(`server connected on Port: ${port}`) })