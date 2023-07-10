const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    name: {type: String},
    age: {type: Number},
    gender: {type: String},
    email: {type: String},
    contactNo: {type: String},
    address1: {type: String},
    address2: {type: String},
    country: { type: String },
    state: { type: String },
    city: { type: String },
    pincode: { type: Number },
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);