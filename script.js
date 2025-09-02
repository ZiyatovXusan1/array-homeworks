// ! 1-masala
// function getLevel2(n) {
//     let natija = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(2 ** i);
//     }
//     return natija;
// }

// console.log(getLevel2(6));

 //! 2-masala
// function getArray2(n, A, B) {
//   let arr = [A, B];
//   for (let i = 2; i < n; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += arr[j];
//     }
//     arr.push(sum);
//   }
//   return arr;
// }
// console.log(getArray2(5, 2, 3));

 //! 3-masala
// function reverseArray(arr) {
//   return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4]));

 //! 4-masala
// function oddElements(arr) {
//   let odds = arr.filter(x => x % 2 !== 0);
//   console.log(odds.join(" "), "toqlar soni =", odds.length);
// }
// oddElements([4, 5, 7, 8, 6, 9]);

 //! 5-masala
// function evenOddArrange(arr) {
//   let evens = arr.filter(x => x % 2 === 0);
//   let odds = arr.filter(x => x % 2 !== 0).reverse();
//   return [...evens, ...odds];
// }
// console.log(evenOddArrange([4, 5, 7, 8, 6, 9]));

 //! 6-masala
// function printEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i += 2) console.log(arr[i]);
// }
// printEvenIndex([1, 2, 3, 4, 5, 6]);

 //! 7-masala
// function printOddIndexReverse(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 2) console.log(arr[i]);
// }
// printOddIndexReverse([1, 2, 3, 4, 5, 6]);

 //! 8-masala
// function printEvenOddIndex(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i += 2) res.push(arr[i]);
//   for (let i = 1; i < arr.length; i += 2) res.push(arr[i]);
//   console.log(res.join(" "));
// }
// printEvenOddIndex([1, 2, 3, 4, 5, 6]);

 //! 9-masala
// function printOddEvenSpecial(arr) {
//   let odds = [];
//   let evens = [];
//   for (let i = 1; i < arr.length; i += 2) odds.push(arr[i]);
//   for (let i = arr.length - 2; i >= 0; i -= 2) evens.push(arr[i]);
//   console.log([...odds, ...evens].join(" "));
// }
// printOddEvenSpecial([1, 2, 3, 4, 5, 6]);

 //! 10-masala
// function specialPrint(arr) {
//   let res = [];
//   let l = 0, r = arr.length - 1;
//   while (l <= r) {
//     if (l <= r) res.push(arr[l++]);
//     if (l <= r) res.push(arr[l++]);
//     if (l <= r) res.push(arr[r--]);
//     if (l <= r) res.push(arr[r--]);
//   }
//   console.log(res.join(" "));
// }
// specialPrint([1, 2, 3, 4, 5, 6, 7, 8]); 

 //! 11-masala
// function rangeOutSum(arr, K, L) {
//   return arr.reduce((sum, val, i) => (i < K || i > L ? sum + val : sum), 0);
// }
// console.log(rangeOutSum([1, 2, 3, 4, 5], 1, 3)); 

 //! 12-masala
// function truthyFalsy(arr) {
//   let truthy = arr.filter(Boolean);
//   let falsy = arr.filter(x => !x);
//   console.log("Truthy:", truthy, "Falsy:", falsy);
// }
// truthyFalsy([10, false, "", "Abdulaziz", null]); 

 //! 13-masala
// function getOddMin(arr) {
//   let evenIndexElems = arr.filter((_, i) => i % 2 === 0);
//   return Math.min(...evenIndexElems);
// }
// console.log(getOddMin([4, 2, 7, 9, 1]));

 //! 14-masala
// function getEvenMax(arr) {
//   let oddIndexElems = arr.filter((_, i) => i % 2 === 1);
//   return Math.max(...oddIndexElems);
// }
// console.log(getEvenMax([4, 2, 7, 9, 1]));

 //! 15-masala
// function lastLocalMax(arr) {
//   let idx = -1;
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) idx = i;
//   }
//   return idx;
// }
// console.log(lastLocalMax([1, 3, 2, 5, 4, 6])); 