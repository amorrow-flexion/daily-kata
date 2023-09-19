// karate-chop kata
// const chopArray:number[] = [];
// for (let i: number=0; i<100; i++){
//   chopArray.push(i);
// }

export function binarySearch(arr: number[], val: number): number {

  if (arr.length === 0 ) {
    return -1;
  }
let midIndex;
  if (arr.length===1){
    midIndex=0;
  } else {
    midIndex = Math.floor(arr.length / 2.0);
  }
  const middleValue = arr[midIndex];
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex, arr.length);

  console.log(left);
  console.log(right);
  console.log(midIndex);
  if (middleValue === val) {
    return midIndex;
  } else if (arr.length === 1) {
    return -1;
  }
  else if (middleValue > val) {
    return binarySearch(left, val);
  } else  {
    return binarySearch(right, val);
  }
}