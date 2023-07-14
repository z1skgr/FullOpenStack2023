import { Key, useState, useEffect } from "react";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import diagnosisService from '../services/diagnosis'
import { Diagnosis } from "../types";

import { useParams } from "react-router-dom";

const PatientDetail = ({pt}: {pt:any}) => {
    const { id } = useParams();
    const [diagnosis, setDiagnosis] = useState<Diagnosis []>(); 
    useEffect(() => {

        
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
        <h2>{pt?.name}
            {pt?.gender === 'male' 
            ? <ManIcon></ManIcon> 
            : <WomanIcon></WomanIcon>}
        </h2>
        <p>SSN: {pt?.ssn}</p>
        <p>Occupation: {pt?.occupation}</p>
        <div>
            <h3>Entries</h3>
            <p>{pt?.dateOfBirth}</p>
            {pt && pt?.entries.map((e: { description: any; }) => e.description)}
            {pt && 
                pt.entries.map((e: { diagnosisCodes: string[]; }, i: any) => 
                e.diagnosisCodes?.map((c: string, i: Key | null | undefined) => 
                <ul key={i}><li>{c} {findDiagnosisName(c)}</li></ul>))}
        </div>
    </div>
  )
}

export default PatientDetail