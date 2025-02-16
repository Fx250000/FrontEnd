// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    _specimenNum: specimenNum,
    _dna: dna,

    get specimenNum() {
      return this._specimenNum;
    },

    get dna() {
      return this._dna;
    },

    mutate() {
      // Randomly select an index to mutate
      const indexToMutate = Math.floor(Math.random() * this._dna.length);
      const currentBase = this._dna[indexToMutate];
      let newBase;

      // Ensure the new base is different
      do {
        newBase = returnRandBase();
      } while (newBase === currentBase);

      this._dna[indexToMutate] = newBase;
      return this._dna; // Return the updated DNA for convenience
    },

    compareDNA(otherStrand) {
      if (!otherStrand || !otherStrand.dna) {
        console.error('Invalid specimen for comparison.');
        return;
      }

      const otherDNA = otherStrand.dna;
      let count = 0;

      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === otherDNA[i]) {
          count++;
        }
      }

      const percentage = (count / this._dna.length) * 100;
      console.log(`Specimen #${this._specimenNum} and specimen #${otherStrand.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`);
      return percentage;
    },

    willLikelySurvive() {
      const cCount = this._dna.filter(base => base === 'C').length;
      const gCount = this._dna.filter(base => base === 'G').length;
      const percentage = (cCount + gCount) / this._dna.length * 100;
      return percentage >= 60;
    }
  };
}

create30SurvivivingSpecimen = () => {
  const survivingSpecimen = [];
  let count = 0;

  while (count <= 30) {
    const specimen = pAequorFactory(count, mockUpStrand());
    if (specimen.willLikelySurvive()) {
      survivingSpecimen.push(specimen);
      count++;
    }
  }

  return survivingSpecimen;
};

const survivingSpecimen = create30SurvivivingSpecimen();
console.log(survivingSpecimen);