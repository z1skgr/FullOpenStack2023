export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
  }

export type NonSensitiveDiaryEntry = Omit<Patient, 'ssn'>;

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: string;
  ssn?: string;
  dateOfBirth?: string;
}
