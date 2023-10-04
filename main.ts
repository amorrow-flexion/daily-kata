// karate-chop kata
// const chopArray:number[] = [];
// for (let i: number=0; i<100; i++){
//   chopArray.push(i);
// }

// function split(startIndex: number, endIndex: number, arr: number[], val: number) {
//   if (startIndex >= endIndex) {
//     return -1;
//   }
// }

///testing small change for mob
// testing again

export function binarySearch(
  arr: number[],
  val: number,
  startIndex: number = 0,
  endIndex: number = arr.length - 1
): number {
  if (arr.length === 0) {
    return -1;
  }

  const midPointIndex = Math.floor(endIndex - startIndex / 2);
  const midPointValue = arr[midPointIndex];

  if (midPointValue === val) {
    return midPointIndex;
  } else if (endIndex - startIndex === 0) {
    return -1;
  } else if (midPointValue < val) {
    // search right side
    return binarySearch(arr, val, midPointIndex + 1, endIndex);
  } else {
    // search left side
    return binarySearch(arr, val, startIndex, midPointIndex);
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
