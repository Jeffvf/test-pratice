function isValidArray(arr){
  for(let item of arr){
    if(isNaN(item)){
      throw new Error('This array contains items that are not numbers!');
    }
  }
}

function analyzeArray(arr){
  isValidArray(arr);

  arr.sort((a, b) => {return a - b});

  const length = arr.length;
  const min = arr[0];
  const max = arr[length - 1];

  const average = arr.reduce((prev, next) => prev + next, 0) / length;

  return {
    average,
    min,
    max,
    length
  };
}

export default analyzeArray;