import patientsData from "../../data/patientor";
import { Patient, NewPatient } from "../types";
import { NonSensitiveDiaryEntry } from '../types';
const { v1: uuidv1 } = require('uuid');


const getPatients = (): Array<Patient> => {
  return patientsData;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const newPatient = { id: uuidv1, ...entry };
  patientsData.push(newPatient);
  return newPatient;
};




export default { getPatients, getNonSensitiveEntries, addPatient };