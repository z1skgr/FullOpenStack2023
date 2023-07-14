export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
  }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}


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

