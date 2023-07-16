import { NewPatient, Gender, Entry  } from './types';

const isArray = (array: unknown): boolean => {
  return Array.isArray(array) || array instanceof Array; 
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (str: unknown): string => {
  if (!isString(str)) {
    throw new Error(`Incorrect or missing ${str}`);
  }

  return str;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
      throw new Error('Incorrect date: ' + date);
  }
  return date;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseGender= (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect weather: ' + gender);
  }
  return gender;
};

const parseEntries = (entries: any): Entry[] => {
  if(!isArray(entries) || !entries) {
      throw new Error('Incorrect of missing entries ');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return entries;   
};





const toNewPatientEntry = (object: unknown): NewPatient => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }
    
      if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object &&
      'entries' in object)  {
        const newEntry: NewPatient = {
          name: parseString(object.name),
          dateOfBirth: parseDate(object.dateOfBirth),
          ssn: parseString(object.ssn),
          gender: parseGender(object.gender),
          occupation: parseString(object.occupation),
          entries: parseEntries(object.entries)
        };
      
        return newEntry;
      }
    
      throw new Error('Incorrect data: a field missing');

  };

  
export default toNewPatientEntry;