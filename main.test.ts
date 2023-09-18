import { binarySearch } from "./main";

// test('Should return the index of value')


let actual = binarySearch([1,2,3,4,5], 6);
if(actual != -1) {
  console.log("Failed test");
}
else {
  console.log("Passing test");
}