const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    //EmpId
    empId: {type: String},

    //Input Field
    firstName: {type: String},
    lastName: {type: String},
    skills: {type: String},

    //Radio Button
    gender: {type: String},

    //Dropdowns
    department: {type: String}
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);