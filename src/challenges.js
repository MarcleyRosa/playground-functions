// Desafio 1
function compareTrue(ver, fal) {
  if (ver && fal) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(stringSepa) {
  return stringSepa.split(' ');
}

// Desafio 4
function concatName(nomesArray) {
  let ult = nomesArray[nomesArray.length - 1];
  let pri = nomesArray[0];
  return `${ult}, ${pri}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
// Desafio 6

function repetitionsDie(maiorNumero, numeros) {
  let repet = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero === numeros[index]) {
      repet += 1;
    }
  }
  return repet;
}

function highestCount(numeros) {
  let maiorNumero = 0;
  for (let i = 0, cont = 1; i < numeros.length; i += 1, cont += 1) {
    if (numeros[i] < 0 || numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  return repetitionsDie(maiorNumero, numeros);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const trombam = 'os gatos trombam e o rato foge';
  let posCat1 = cat1 - mouse;
  let posCat2 = cat2 - mouse;

  if (posCat1 < 0) {
    posCat1 *= (-1);
  } else if (posCat2 < 0) {
    posCat2 *= (-1);
  }

  if (posCat1 === posCat2) {
    return trombam;
  }
  if (posCat1 < posCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8

function compareFizz(five, three, palavra, subStri) {
  if (five && three) {
    subStri.push(palavra);
  }
}
function fizzBuzz(numArray) {
  let subStri = [];
  for (let index = 0; index < numArray.length; index += 1) {
    const three = numArray[index] % 3;
    const five = numArray[index] % 5;

    const fiveDif = five !== 0;
    const threeDif = three !== 0;
    const fiveEq = five === 0;
    const threeEq = three === 0;

    compareFizz(fiveDif, threeEq, 'fizz', subStri);
    compareFizz(fiveEq, threeDif, 'buzz', subStri);
    compareFizz(fiveEq, threeEq, 'fizzBuzz', subStri);
    compareFizz(fiveDif, threeDif, 'bug!', subStri);
  }
  return subStri;
}

// Desafio 9

function encode(vogais) {
  let num = '';
  for (let index = 0; index < vogais.length; index += 1) {
    let vogal = vogais[index];
    const obj = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
    };
    const add = obj[vogal];
    if (add) num += add;
    else num += vogal;
  }
  return num;
}

function decode(vogais) {
  let num = '';
  for (let index = 0; index < vogais.length; index += 1) {
    let vogal = vogais[index];
    const obj = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    const add = obj[vogal];
    if (add) num += add;
    else num += vogal;
  }
  return num;
}

// Desafio 10
function techList(array, string) {
  let obj = [];
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    obj.push({
      tech: array[i],
      name: string,
    });
  }
  if (array.length > 0 || string > 0) {
    return obj;
  }
  return 'Vazio!';
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
