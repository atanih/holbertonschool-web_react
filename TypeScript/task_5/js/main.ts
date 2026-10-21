interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits';
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}

const mathCredits: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const historyCredits: MajorCredits = { credits: 4, brand: 'MajorCredits' };
const artCredits: MinorCredits = { credits: 1, brand: 'MinorCredits' };
const musicCredits: MinorCredits = { credits: 2, brand: 'MinorCredits' };

console.log(sumMajorCredits(mathCredits, historyCredits));
console.log(sumMinorCredits(artCredits, musicCredits));
