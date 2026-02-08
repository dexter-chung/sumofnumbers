function sumFor(array: number[]):number {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function sumWhile(array: number[]):number {
  let total = 0;
  let i = 0;
  while (i < array.length) {
    total += array[i];
    i++;
  }
  return total;
}

function sumRecursion(array: number[]) : number {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + sumRecursion(array.slice(1));
}

function sumTheFunctionalWay(array: number[]) : number {
  const num = array.reduce((total, number) => total + number, 0);
  return num;
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
