const express = require('express');

const employeeRoute = express.Router();

let employeeModel = require('../model/employee');

//Fetch all the employees
employeeRoute.get('/get-employees/', (req, res, next) => {
    employeeModel.find((err, employee) => {
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(400).json({ 'Error': `Something went wrong ${err}` });
        }
    });
});

//Get Employee by Id
employeeRoute.get('/get-employee/:id/', (req, res, next) => {
    let id = req.params.id;
    employeeModel.findById(id, (err, employee) => {
        if (employee) {
            res.json(employee);
        } else {
            res.status(400).json({ 'Error': `Something went wrong ${err}` });
        }
    })
});

//Add New Employee
employeeRoute.post('/add-employee/', (req, res, next) => {
    let employee = new employeeModel(req.body);
    employee.save().then(x => {
        res.status(200).send({ 'Message': 'Employee Added Successfully' });
    }).catch(err => {
        res.status(400).send({ 'Error': 'Something went wrong' });
    });
});

//Update Existing Employee
employeeRoute.patch('/edit-employee/:id/', (req, res, next) => {
    let id = req.params.id;
    employeeModel.findById(id, function (err, employee) {
        if (employee) {
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.skills = req.body.skills;
            employee.gender = req.body.gender;
            employee.department = req.body.department;

            employee.save().then(emp => {
                res.json({ 'Message': 'Employee Updated Successfully' });
            })
        } else {
            res.status(404).send({ 'Error': 'Employee not found' }); 
        }
        if(err){
            res.status(400).send({ 'Error': `Something went wrong ${err}` });
        }
    })
});

//Delete an Employee
employeeRoute.delete('/delete-employee/:id/', (req, res, next) => {
    let id = req.params.id;
    employeeModel.findByIdAndDelete(id, (err, employee) => {
        if (employee){
            res.json({ 'Message': 'Employee Deleted Successfully' });
        } else {
            res.status(404).send({ 'Error': 'Employee not found' });
        }
        if(err){
            res.status(400).send({ 'Error': `Something went wrong ${err}` });
        }
    });
});

module.exports = employeeRoute;