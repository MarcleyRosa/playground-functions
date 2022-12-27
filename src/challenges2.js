// Desafio 11

// for (let ind = 0; ind < telNumber.length; ind += 1) {
//   if (num === telNumber[ind]) {
//     repet += 1;
//     if (repet > 2) return message;
//   }
// }

// function counts(countMap, num, message) {
//   countMap[num] = (countMap[num] || 0) + 1;
//   if (countMap[num] === 3) return message;
// }

function compare(param1, param2) {
  return param1 || param2;
}

function generatePhoneNumber(telNumber) {
  const message = 'não é possível gerar um número de telefone com esses valores';
  if (telNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const countMap = [];
  for (let num of telNumber) {
    countMap[num] = (compare(countMap[num], 0)) + 1;
    if (compare(num > 9, num < 0) || countMap[num] === 3) return message;
  }
  const n = telNumber;
  const res = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  return res;
}

// Desafio 12

function testss(param1, param2, param3) {
  if (param1 && param2 && param3) {
    return true;
  }
  return false;
}
function absForm(line1, line2, line3) {
  const result = line3 > Math.abs(line1 - line2);
  return result;
}

function triangleCheck(lineA, lineB, lineC) {
  let ab = lineA + lineB;
  let ac = lineA + lineC;
  let bc = lineB + lineC;

  const lineAC = absForm(lineA, lineC, lineB);
  const lineBC = absForm(lineB, lineC, lineA);
  const lineAB = absForm(lineA, lineB, lineC);

  if (lineA < ab && lineB < ac && lineC < bc) {
    return testss(lineAC, lineBC, lineAB);
  }
  return false;
}

function hydrate(frase) {
  let glass = 0;
  const test = frase.split(' ');
  for (let num of test) {
    const numbers = Number(num);
    if (!Number.isNaN(numbers)) {
      glass += numbers;
    }
  }
  let plur = 'copos';
  if (glass === 1) {
    plur = 'copo';
  }
  return `${glass} ${plur} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
