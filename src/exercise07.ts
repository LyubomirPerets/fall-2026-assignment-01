import * as fs from 'fs';
import * as path from 'path';

export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const rawData = fs.readFileSync(
    path.join(__dirname, '..', 'gradebook.json'), 'utf-8');
    
  const gradebook: Gradebook = JSON.parse(rawData);

  const scores: number[] = Object.values(gradebook)
    .filter(studentGrades => subject in studentGrades)
    .map(studentGrades => studentGrades[subject]);

  if (scores.length === 0) return 0;
  return scores.reduce((sum, s) => sum +  s, 0) / scores.length;
}
