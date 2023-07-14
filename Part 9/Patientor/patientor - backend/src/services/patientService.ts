import patientsData from "../../data/patientor";
import { Patient, NewPatient } from "../types";
import { NonSensitivePatientEntry } from '../types';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const { v1: uuidv1 } = require('uuid');


const getPatients = (): Array<Patient> => {
  return patientsData;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation, entries}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const newPatient = { id: uuidv1, ...entry };
  patientsData.push(newPatient);
  return newPatient;
};

const getPatientById = (id: string) => {
  return patientsData.find(p => p.id === id); 
}; 



export default { getPatients, getNonSensitiveEntries, addPatient, getPatientById };