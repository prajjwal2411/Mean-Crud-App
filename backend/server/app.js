const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const employeeRoutes = require('../routes/employee');

app.use(bodyParser.json());
app.use(cors({
    origin:'*',
    optionsSuccessStatus: 200
}))

mongoose.set('strictQuery', true)
//Connecting with mongo db
mongoose.connect(`mongodb+srv://prajjwal:prajjwal@projects-applications.plmb7cy.mongodb.net/?retryWrites=true&w=majority`).then((x) => {
    console.log(`Connected to Mongo! Database name: ${x.connections[0].name}`);
}).catch((err) => {
    console.error(`Error connecting to mongo: ${err}`);
})

const port = process.env.PORT || 4000;

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'OPTIONS', 'PATCH', 'DELETE')
//     //res.setHeader('Access-Control-Allow-Headers', )
//     //res.setHeader('Access-Control-Allow-Credentials')
// })

//Routes
app.use('/employees', employeeRoutes);

const server = app.listen(port, function() {
    console.log(`Server listening on port: ${port}`);
})