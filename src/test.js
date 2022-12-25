// let vogais = 'h2ll4'
// let num = ''
// let vog = ''
// let result 
// for (let index = 0; index < vogais.length; index += 1) {
//     if (vogais[index] === 'a') {
//         num = num + '1';
//     } else if (vogais[index] === 'e') {
//         num = num + '2';
//     } else if (vogais[index] === 'i') {
//         num = num + '3';
//     } else if (vogais[index] === 'o') {
//         num = num + '4';
//     } else if (vogais[index] === 'u') {
//         num = num + '5'
//     } else {
//         num = num + vogais[index]
//     }
//  } 
//  console.log(vogais);
//  console.log(num);
// if (vogais === num) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// if (vogais === num) {
//     for (let index = 0; index < vogais.length; index += 1) {
//         if (vogais[index] === '1') {
//             vog = vog + 'a';
//         } else if (vogais[index] === '2') {
//             vog = vog + 'e';
//         } else if (vogais[index] === '3') {
//             vog = vog + 'i';
//         } else if (vogais[index] === '4') {
//             vog = vog + 'o';
//         } else if (vogais[index] === '5') {
//             vog = vog + 'u'
//         } else {
//             vog = vog + vogais[index]
//         }
//     }
//     result = vog
      
// } else {
//     result = num
// }


// console.log(vog);
// console.log(num);

// let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
// let string = 'Marcley'
// let obj = []

// console.log(array.sort(function(a, b) {
//    if (a.tech > b.tech) {
//       console.log(false);
//    } else {
//       console.log(true);
//    }
// }));

// for (let i = 0; i < array.length; i += 1) {
//      obj.push({
//        tech: array[i],
//        name: string
//      })
     
// }
 
// if (array.length > 0 || string > 0) {
//     console.log(obj);
//  } else {
//     console.log('Vazio!');
//  }
 
//  console.log(array);

// let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']
// array.sort();
// console.log(array);

// for (let ind = 0; ind < array.length; ind += 1) {
   
// }

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
//let numeros = [9, 1, 2, 3, 9, 5, 7]
// let numeros = [-2, -2, -1, -1, 9]
// let maiorNumero = 0
// for (let i = 0, cont = 1; i < numeros.length; i += 1, cont += 1) {
//   if (numeros[i] < 0) {
//      maiorNumero = numeros[i]
//   } else if (numeros[i] > maiorNumero) {
//      maiorNumero = numeros[i]
//    }
// }
// console.log(maiorNumero);

//   let repet = 0
//     for (let index = 0; index < numeros.length; index += 1) {
//       if (maiorNumero === numeros[index]) {
//          repet = repet + 1
//       }
//     }  
// console.log(repet);


let telnumber = [1, 2, 3, 3, 3, 6, 7, 8, 9, 0, 1]

console.log(telnumber.length);
// let arrayconf = []
// let result = '(' + telnumber[0] + telnumber[1] + ') ' + telnumber[2] + telnumber[3] + telnumber[4] + telnumber[5] + telnumber[6] + '-' + telnumber[7] + telnumber[8] + telnumber[9] + telnumber[10];
// for (let n of telnumber) {
//   let repet = 0
//     for (let ind = 0; ind < telnumber.length; ind += 1) {
//     if (n === telnumber[ind]) {
//       repet = repet + 1
//       console.log(repet);
//       if (repet > 2) {
//         console.log('não é possível gerar um número de telefone com esses valores');
//         break;
//       }

//       if (telnumber[ind] > 9 || telnumber[ind] < 0) {
//         console.log('não é possível gerar um número de telefone com esses valores');
//         break;
//       } else if (telnumber.length !== 11) {
//          console.log('Array com tamanho incorreto.');
//          break;
//     }
//   }
 

// }
    
  

// }
// console.log(arrayconf);
// console.log(result);



// let telnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
// let repet = 0
// for (let i = 0; i < telnumber.length; i += 1) {
//   console.log('vvvvvvvvvvv');
//   for (let ind = 0; ind < telnumber.length; ind += 1) {
//     console.log('hhhhhhhh');
//     if (telnumber[i] === telnumber[ind]) {
//       console.log('tsg');
//     }
    
//   }
// }
  
// console.log(repet);


function triangleCheck(lineA, lineB, lineC) {
    let ab = lineA + lineB;
    let ac = lineA + lineC;
    let bc = lineB + lineC;
    let AB = Math.abs(lineA - lineB);
    let AC = Math.abs(lineA - lineC);
    let BC = Math.abs(lineB - lineC);
    if (lineA < ab && lineB < ac && lineC < bc) {
      if (lineB > AC && lineA > BC && lineC > AB) {
        console.log(true);
      } else {
        console.log(false);
      }
    } else {
      console.log(false);
    }
  }
  triangleCheck(10, 14, 8);
