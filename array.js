// let item=["book","pen","calculator"];
// console.log(item);
// console.log(item.length)
// for(let i=0;i<=item.length-1;i++){
//   console.log(item[i])
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<=marks.length-1;i++)
// {
// sum+=marks[i];
// }
// let average =sum/marks.length;
// console.log(`the average marks of student is ${average}`);

// let prices=[250,645,300,900,50];
// for(let i=0;i<=prices.length-1;i++){
//   let newPrice = prices[i]-0.1*prices[i];
//   prices[i]=newPrice;
// }
// console.log(`The discounted price is ${prices}` );


let fruits=["apple","banana","mango"];
fruits.push("litchy","watermelon"); //push 
console.log(fruits);
let popFruit=fruits.pop();//pop
console.log(fruits);
console.log(popFruit);
console.log(fruits.toString());//toString


let vegetable=["brinjal","pea","cauliflower"];
let foodItem= fruits.concat(vegetable);//concat the two arrays
console.log(foodItem);

console.log(fruits.unshift("orange"));//add the item to the first index
console.log(fruits.shift());//deletethe item of the first index
console.log(fruits.slice(1,3));//return a piece of array(start index,end index)
fruits.splice(2,2,"watermelon","guava")//changes original array(add,remove,replace)
console.log(fruits)

let array= ["bloomberg","microsoft","uber","gooogle","ibm","netflix"];
console.log(array.shift());
array.splice(2,1,"ola")
array.push("amazon")
console.log(array)