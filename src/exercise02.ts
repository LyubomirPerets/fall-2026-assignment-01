class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomError';
    }
  }

export function transcribeDNA(dna: string): string {
    let rna = [];
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case 'A':
          rna.push('U');
          break;
        case 'T':
          rna.push('A');
          break;
        case 'C':
          rna.push('G');
          break;
        case 'G':
          rna.push('C');
          break;
        default:
          throw new CustomError('No Such Nucleotide');
      }
    }
  return rna.join('');
}
