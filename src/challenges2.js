// Desafio 11
function generatePhoneNumber(telNumber) {
  bole = false
  let result = '(' + telNumber[0] + telNumber[1] + ') ' + telNumber[2] + telNumber[3] + telNumber[4] + telNumber[5] + telNumber[6] + '-' + telNumber[7] + telNumber[8] + telNumber[9] + telNumber[10];
  if (telNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let n of telNumber) {
    let repet = 0
      for (let ind = 0; ind < telNumber.length; ind += 1) {
        if (telNumber[ind] > 9 || telNumber[ind] < 0) {
          result = 'não é possível gerar um número de telefone com esses valores'
        } 
        if (n === telNumber[ind]) {
          repet = repet + 1
          if (repet > 2) {
            result = 'não é possível gerar um número de telefone com esses valores'
          } else {
            bole = true
          }
      }
      }
    
  }

  if (bole === true) {
    return result
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
