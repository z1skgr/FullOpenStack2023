import patientData from "../../data/patientor";
import { Patient } from "../types";
import { NonSensitiveDiaryEntry } from '../types';

const getPatients = (): Array<Patient> => {
  return patientData;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};





export default { getPatients, getNonSensitiveEntries };