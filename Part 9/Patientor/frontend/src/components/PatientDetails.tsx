import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

import patientService from '../services/patients';
import { Diagnosis, Patient } from "../types";
import diagnosisService from '../services/diagnosis'

const PatientDetail = () => {
    const [patient, setPatient] = useState<Patient>(); 
    const { id } = useParams();
    const [diagnosis, setDiagnosis] = useState<Diagnosis []>(); 

    useEffect(() => {
        const fetchPatient = async () => {
            const patientById = await patientService.getPatientById(String(id));
            setPatient(patientById); 
        }
        fetchPatient();
        
        const fetchDiagnosis = async () => {
            const diagnosisData = await diagnosisService.getAll(); 
            setDiagnosis(diagnosisData); 
        }
        fetchDiagnosis(); 
    }, [id]); 

    const findDiagnosisName = (code: string): string | null => {
        const foundDiagnosis = diagnosis?.find(d => d.code === code)
        return foundDiagnosis ? foundDiagnosis.name : null; 
    }

  return (
    <div>
        <h2>{patient?.name}
            {patient?.gender === 'male' 
            ? <ManIcon></ManIcon> 
            : <WomanIcon></WomanIcon>}
        </h2>
        <p>SSN: {patient?.ssn}</p>
        <p>Occupation: {patient?.occupation}</p>
        <div>
            <h3>Entries</h3>
            <p>{patient?.dateOfBirth}</p>
            {patient && patient?.entries.map(e => e.description)}
            {patient && 
                patient.entries.map((e, i) => 
                e.diagnosisCodes?.map((c, i) => 
                <ul key={i}><li>{c} {findDiagnosisName(c)}</li></ul>))}
        </div>
    </div>
  )
}

export default PatientDetail