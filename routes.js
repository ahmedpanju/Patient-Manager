var Patient = require('./models/patients');
module.exports = function(app) {
    app.get('/', function(req, res) {
        Patient.find({}, function(err, docs) {
            if(err) throw err;
            var patients = docs;
            res.render('index.ejs', {
                title: 'Patient Manager',
                style: 'index.css',
                logic: 'index.js',
                patients: patients
            }); 
        });
    });
    
    app.post('/add_patient', function(req, res) {
        var name = req.body.name;
        var dob = req.body.dob;
        var height = req.body.height;
        var weight = req.body.weight; 
        var symptoms = req.body.symptoms;
        
        var newPatient = Patient ({
            name: name,
            dob: dob,
            height: height,
            weight: weight,
            symptoms: symptoms
        });
        
        Patient.createPatient(newPatient, function(err, post) {
            if(err) throw err;
            res.redirect('/');
        });
    });
    
    app.post('/update_date', function(req, res) {
        var id = req.body.patient_id;
        var date = req.body.date;
        Patient.findById(id, function(err, docs) {
            if (err) throw err;
            console.log(docs);
            docs.dob = date;
            docs.save(function(err) {
            if (err)
                console.log('error');
            else
                console.log('success');
                res.redirect('/');
            });
        });
    });
    
    app.post('/update_height', function(req, res) {
        var id = req.body.patient_id;
        var height = req.body.height;
        Patient.findById(id, function(err, docs) {
            if (err) throw err;
            docs.height = height;
            docs.save(function(err) {
            if (err)
                console.log('error');
            else
                console.log('success');
                res.redirect('/');
            });
        });
    });
    
    app.post('/update_weight', function(req, res) {
        var id = req.body.patient_id;
        var weight = req.body.weight;
        Patient.findById(id, function(err, docs) {
            if (err) throw err;
            docs.weight = weight;
            docs.save(function(err) {
            if (err)
                console.log('error');
            else
                console.log('success');
                res.redirect('/');
            });
        });
    });
    
    app.post('/update_symptoms', function(req, res) {
        var id = req.body.patient_id;
        var symptoms = req.body.symptoms;
        Patient.findById(id, function(err, docs) {
            if (err) throw err;
            docs.symptoms = symptoms;
            docs.save(function(err) {
            if (err)
                console.log('error');
            else
                console.log('success');
                res.redirect('/');
            });
        });
    });
    
    app.post('/delete_patient', function(req, res) {
        var id = req.body.patient_id;
        Patient.find({_id: id}).remove().exec();
        res.redirect('/');
    });
}