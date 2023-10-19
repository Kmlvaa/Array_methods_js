//tesk 1
let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
numbers.sort((a,b) => a-b).forEach(num => console.log(num))
console.log("-------------------");

//task 2
function union(array1, array2){
    const arr = array1.concat(array2)
    return arr.filter((item, index) => arr.indexOf(item) === index).sort((a,b) => a-b)
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
console.log("-------------------");

//task 3
let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]
let filteredArray = array.filter(n => n)
console.log(filteredArray);
console.log("-------------------");

//task 4
 let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
];
let sortedArr = library.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
console.log(sortedArr);
console.log("-------------------");

//task 5
let chainArr = [2,4,8,16,33]
function isFactorChain(arr) {
    return arr.reduce((isChain, current, index, array) => {
      if (index === 0) {
        return isChain;
      }
      const previous = array[index - 1];
      return isChain && current % previous === 0;
    }, true);
}
console.log(isFactorChain(chainArr));
