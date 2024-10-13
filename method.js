//foreEachloop
//-> arr.forEach(callBackFuntion)
//-higher order function i.e takes function as parameter & return function
// let arr=["kathmandu","bhaktapur","lalitpur"];
// arr.forEach((val,idx,arr)=>{
//   console.log(val.toUpperCase(),idx,arr);
// });

// let num=[12,43,56]
// num.forEach((val)=>{
// console.log(val*val)
// })
// //map
// //->arr.map(callBackFunction(value,index,array))
// let nums=[12,43,56]
// nums.map((val)=>{
// console.log(val);
// });
// //storing in new array
// let newArr=nums.map((val)=>{
// return val*val;
// });
// console.log(newArr)

//filter
let nums=[12,43,56]
let evenArr= nums.filter((val)=>{
  return val%2==0;
})
console.log(evenArr)

let marks=[80,70,90,94,80]
let markAbove90=marks.filter((marks)=>{
  return marks>90;
})
console.log(markAbove90);

//reduce method
let number=[1,2,3,4];
const sum=number.reduce((previous,current)=>{
return previous+current;
});
console.log (sum);

//to find largest number
const largest=number.reduce((previous,current)=>{
  return previous>current? previous: current;
});
console.log(largest);


// let n= prompt("enter the total number");
let n=5
let value=[];
for( i=1;i<=n;i++)
{
  value[i-1]=i;
}
const sumn=value.reduce((previous,current)=>{
  return previous+current;
});
console.log(sumn);