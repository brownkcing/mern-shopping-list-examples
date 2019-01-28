const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const itemroute = require('./routes/api/itemRoute');

const app = express();

//body-parser
app.use (bodyParser.json());

// mongodb configs
const db = require('./config/keys').mongoURI;
const newUrl = {useNewUrlParser: true}; //for new mongoose driver url parser


//mongo connection
mongoose
    .connect(db, newUrl) //connect mongodb 'keys.js'
        .then(() => {console.log('Database (MongoDB) is Connected')}) // log if succesful in connecting
        .catch (err => console.log(`${err} Cannot connect database`)) // catch error and logging it

//routes
app.use('/api/itemRoute', itemroute);

//port
const port = process.env.PORT || 3000;  

app.listen (port, () => console.log (`Server is connected to ${port}`));