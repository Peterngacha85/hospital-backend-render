const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Dummy data
let patients = [{ id: 1, name: 'John Doe', age: 45, condition: 'Flu' }];
let doctors = [{ id: 1, name: 'Dr. Smith', specialty: 'Cardiology' }];
let appointments = [{ id: 1, patientId: 1, doctorId: 1, date: '2025-03-01' }];
let medicalRecords = [{ id: 1, patientId: 1, history: 'No allergies' }];

// 1. Get all patients
app.get('/patients', (req, res) => {
    res.json(patients);
});

// 2. Add a new patient
app.post('/patients', (req, res) => {
    const newPatient = { id: patients.length + 1, ...req.body };
    patients.push(newPatient);
    res.status(201).json(newPatient);
});

// 3. Get all doctors
app.get('/doctors', (req, res) => {
    res.json(doctors);
});

// 4. Book an appointment
app.post('/appointments', (req, res) => {
    const newAppointment = { id: appointments.length + 1, ...req.body };
    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
});

// 5. Get medical records of a patient
app.get('/medical-records/:patientId', (req, res) => {
    const records = medicalRecords.filter(record => record.patientId == req.params.patientId);
    res.json(records);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
