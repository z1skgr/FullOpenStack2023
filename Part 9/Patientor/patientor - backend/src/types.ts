export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
  }


  export interface BaseEntry {
    id: string,
    description: string,
    date: string,
    specialist: string,
    diagnosesCodes: Array<Diagnose['code']>
}


export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}
export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck",
  healthCheckRating: HealthCheckRating
}

export interface Discharge {
  date: string,
  criteria: string
}

export interface HospitalEntry extends BaseEntry{
  type: "Hospital",
  discharge: Discharge
}

export interface SickLeave {
  startDate: string,
  endDate: string
}

export interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare',
  sickLeave?: SickLeave,
  employerName: string
}

export type Entry = HospitalEntry | HealthCheckEntry | OccupationalHealthcareEntry; 


export type NonSensitivePatientEntry = Omit<Patient, 'ssn'| 'entries'>;
export type NewPatient = Omit<Patient, 'id'>;


export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: string;
  ssn: string;
  dateOfBirth: string;
  entries: Entry[]
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'

}

