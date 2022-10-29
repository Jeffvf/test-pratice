const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function isUpperCase(char){
  return char.toUpperCase() === char;
}

function caesarCipher(string){
  const plain = [...string];
  const newString = [];
  let needsConversion = 0;
  
  for(let char of plain){
    if(isUpperCase(char)){
      needsConversion = 1;
      char = char.toLowerCase();
    }

    if(alphabet.includes(char)){
      const index = alphabet.indexOf(char) + 1;
      char = index > 25 ? alphabet[index - 26] : alphabet[index];
    }

    if(needsConversion) char = char.toUpperCase();
    newString.push(char);
    needsConversion = 0;
  }

  return newString.join('');
}

export default caesarCipher;