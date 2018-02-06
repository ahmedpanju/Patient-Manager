var mongoose = require('mongoose');

mongoose.connect('mongodb://ahmedp:123@ds225078.mlab.com:25078/patient_manager');

var db = mongoose.connection;

var patientSchema = mongoose.Schema({
    name: {
        type: String    
    },
    dob: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    symptoms: {
        type: String
    },
});

module.exports = mongoose.model('Patients', patientSchema);

module.exports.createPatient = function(newPatient, callback) {
    newPatient.save(callback);
}