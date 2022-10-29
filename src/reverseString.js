function reverseString(word){
  const arr = [...word]

  arr.reverse();

  return arr.join('');
}

export default reverseString;