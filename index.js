// Q> 1
// const arr = ["A", "B", "C", "D", "A", "A"];
// console.log(arr.indexOf("A", 1));
// the update of this will be 4 , because it will start counting index from 1 index not 0 index last index of length
// if put instead of ("A",-1) then output will be 5, because it will start counting from last index


// Q> 2 short in accending order
const arr = [2, 3, 100, 44, 54, 32]
// const arr = ['a', 'b', 'c', 'd', 'a']  // out put ['a', 'a', 'b', 'c', 'd'] sort by default string  alfabetic order mai sort karta hai
const result = arr.sort((a, b) => a - b)
// console.log(result);
// jo negative hai wo pahle ayega , or jo positive hai wo baad mai (a,b)=>a-b) using this
// output [2, 3, 32, 44, 54, 100]
