import { IPerson } from '@/model/person';

const listOfPersons: IPerson[] = [
  { id: 3, name: 'Lisa', phoneNr: '070-123' },
  { id: 1, name: 'Karl', phoneNr: '070-234' },
  { id: 6, name: 'Emelie', phoneNr: '070-343' },
  { id: 2, name: 'Anna', phoneNr: '070-543' },
  { id: 4, name: 'Sten', phoneNr: '070-613' },
  { id: 5, name: 'Oskar', phoneNr: '070-723' },
];

export function getAllPersons(): IPerson[] {
  return listOfPersons;
}

export function getPersonById(id: number): IPerson | undefined {
  return listOfPersons.find((p) => p.id === id);
}
