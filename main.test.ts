import { binarySearch } from "./main";

// test('Should return the index of value')


let actual01 = binarySearch([1,2,3,4,5], 6);
let expect01 = -1
if(actual01 != expect01) {
  console.log("Failed test");
}
else {
  console.log("Passing test expect value not found.");
}

let actual02 = binarySearch([1,2,3,4,5], 3);
let expect02 = 2
if(actual02 != expect02) {
  console.log("Failed test");
}
else {
  console.log("Passing test found value.");
}

let actual03 = binarySearch([1,2,3,4,5], 2);
let expect03 = 1
if(actual03 != expect03) {
  console.log("Failed test");
}
else {
  console.log("Passing test found value.");
}

let actual04 = binarySearch([1,2,3,4,5], 5);
let expect04 = 4
if(actual04 != expect04) {
  console.log("ac");
  console.log("Failed test");
  console.log(actual04)
}
else {
  console.log("Passing test found value.");
}
