const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', true)
//Connecting with mongo db
mongoose.connect(`https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wtfzs/endpoint/mean_crud_app`).then((x) => {
    console.log(`Connected to Mongo! Database name: ${x.connections[0].name}`);
}).catch((err) => {
    console.error(`Error connecting to mongo: ${err}`);
})

const employeeRoutes = require('../routes/employees');

app.use(bodyParser.json());
app.use(cors);

const port = process.env.PORT || 4000;

// Routes
//app.use('/employees', employeeRoutes);

const server = app.listen(port, function() {
    console.log(`Server listening on port: ${port}`);
})