import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from '../utils';
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.post("/", (_req, res) => {
  try{
    const newPatientEntry = toNewPatientEntry(_req.body);
    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  }catch(error){
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
  
});

router.get('/:id', (_req, res) => {
  const patient = patientService.getPatientById(_req.params.id);
  if (patient) {
    res.send(patient); 
  } else {
    res.status(404).end();
  }
}); 


export default router;