// karate-chop kata
// const chopArray:number[] = [];
// for (let i: number=0; i<100; i++){
//   chopArray.push(i);
// }

function split(startIndex: number, endIndex: number, arr: number[], val: number) {
  if (startIndex >= endIndex){
    return -1; 
  }


}

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
  const 
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

// [1,2,3,4,5] 5


// 0 4 
//  4 - 0 / 2 = 2
//  ^3 == ^5
//  ^3 < ^5

// 2 4
//  4 - 2 / 2 = 1 (index 3)
//  ^4 == ^5
//  ^4 < ^5

// 3 4
//  4 - 3 / 2 = 1 (index 4)
//  ^5 == ^5
//  return index 4

// ^ represent the value at the index