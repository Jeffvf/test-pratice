function checkArgs(a,b){
  if(isNaN(a) || isNaN(b)){
    throw new Error('Wrong arguments passed!');
  }
}

function multiply(a,b){
  checkArgs(a, b);
  return a * b;
}

function divide(a,b){
  checkArgs(a, b);
  return a / b;
}

function subtract(a,b){
  checkArgs(a, b);
  return a - b;
}

function sum(a,b){
  checkArgs(a, b);
  return a + b;
}

const calculator = {
  sum,
  subtract,
  multiply,
  divide
}

export default calculator;