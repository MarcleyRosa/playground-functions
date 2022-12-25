// Desafio 11

function numGenerate(telNumber, comp, num, message) {
  let repet = 0;
  for (let ind = 0; ind < telNumber.length; ind += 1) {
    if (comp) {
      return message;
    }
    if (num === telNumber[ind]) {
      repet += 1;
      if (repet > 2) {
        return message;
      }
    }
  }
}

function generatePhoneNumber(telNumber) {
  const message = 'não é possível gerar um número de telefone com esses valores'
  if (telNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let num of telNumber) {
    let repet = 0;
    for (let ind = 0; ind < telNumber.length; ind += 1) {
      if (num > 9 || num < 0) {
        return message
      }
      if (num === telNumber[ind]) {
        repet += 1;
        if (repet > 2) {
          return message
        }
      }
    }
  }
  const n = telNumber;
  const result = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;

  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ab = lineA + lineB;
  let ac = lineA + lineC;
  let bc = lineB + lineC;
  let AB = Math.abs(lineA - lineB);
  let AC = Math.abs(lineA - lineC);
  let BC = Math.abs(lineB - lineC);
  if (lineA < ab && lineB < ac && lineC < bc) {
    if (lineB > AC && lineA > BC && lineC > AB) {
      return true;
    }
    return false;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
