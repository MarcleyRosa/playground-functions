// Desafio 1
function compareTrue(ver, fal) {
  if (ver && fal === true) {
    return true
  } else {
    return false
  }

}


// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2
  
}

// Desafio 3
function splitSentence(stringSepa) {
  resul = stringSepa.split(" ")
  return resul
}

// Desafio 4
function concatName(nomesArray) {
  let ult = nomesArray[nomesArray.length - 1]
  let pri = nomesArray[0]
  return ult + ', ' + pri
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties
  return pontos
}
// Desafio 6
function highestCount(numeros) {
//   let maiorNumero = 0;
//   for (let index = 0; index <= numeros.length; index += 1) {
//   if (numeros[index] > maiorNumero) {
//     maiorNumero = numeros[index]
//   }
// }
// console.log(maiorNumero);
//   let maiorNumero = Math.max(...numeros);
//   let repet = 0
//     for (let index = 0; index <= numeros.length; index += 1) {
//       if (maiorNumero === numeros[index]) {
//          repet = repet + 1
//       }
//     }
//     return repet
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let trombam = 'os gatos trombam e o rato foge'
  posCat1 = cat1 - mouse
  posCat2 = cat2 - mouse
  
  if (posCat1 < 0) {
    posCat1 = posCat1 * (-1)
  } else if (posCat2 < 0) {
    posCat2 = posCat2 * (-1)
  }
     if (posCat1 < posCat2) {
    return 'cat1'
    } else if (posCat1 > posCat2) {
    return 'cat2'
    } else if (posCat1 === posCat2) {
    return trombam
    }
}

// Desafio 8
function fizzBuzz(numArray) {
  let subStri = []
  for (let index = 0; index < numArray.length; index += 1 ) {
    three = numArray[index] % 3;
    five = numArray[index] % 5;
    if (three === 0 && five !== 0) {
      subStri.push('fizz');
    } else if (five === 0 && three !== 0) {
      subStri.push('buzz');
    } else if (five === 0 && three === 0) {
      subStri.push('fizzBuzz')
    } else if (five !== 0 && three !== 0) {
      subStri.push('bug!')
    }
    
  }
  return subStri
}

// Desafio 9
function encode(vogais) {
  let num = ''
  for (let index = 0; index < vogais.length; index += 1) {
      if (vogais[index] === 'a') {
          num = num + '1';
      } else if (vogais[index] === 'e') {
          num = num + '2';
      } else if (vogais[index] === 'i') {
          num = num + '3';
      } else if (vogais[index] === 'o') {
          num = num + '4';
      } else if (vogais[index] === 'u') {
          num = num + '5'
      } else {
          num = num + vogais[index]
      }
   } 
return num
} 


function decode(vogais) {
  let num = ''
  for (let index = 0; index < vogais.length; index += 1) {
    if (vogais[index] === '1') {
        num = num + 'a';
    } else if (vogais[index] === '2') {
        num = num + 'e';
    } else if (vogais[index] === '3') {
        num = num + 'i';
    } else if (vogais[index] === '4') {
        num = num + 'o';
    } else if (vogais[index] === '5') {
        num = num + 'u'
    } else {
        num = num + vogais[index]
    }
}
return num
} 
// Desafio 10
function techList() {
  // seu código aqui
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