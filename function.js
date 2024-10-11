function myFunction(msg)//msg->parameter
{
  console.log(msg);
}
myFunction("msg");// msg-> argument
//
function sum(a,b)
{
  console.log(a+b);
}
//
function summ(a,b)
{
c=a+b;
return c;
}
let output = summ(4,6);
console.log(output);
//arrow function
const arrowSummm=(a,b)=>{
  return a+b;
}

// let count=0;
// function countVowels(str){
// for (let i=0;i<=str.length-1;i++){
//   let words= str[i];
//   console.log(words);
//   if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//     count++;
//   }
// }
// console.log(count);
// }
// countVowels("learning");


let count=0;
const countVowel=(str)=>{
for (let i=0;i<=str.length-1;i++){
  let words= str[i];
  console.log(words);
  if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
    count++;
  }
}
console.log(count);
}
countVowel("machine");;