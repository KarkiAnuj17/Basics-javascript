//for loop
for(let i=1;i<=3;i++){
  console.log("code");
}
//sum of first n numbers
let n=9
let sum=0;
for(let i=1;i<=n;i++){
sum+=i;}
console.log(sum);
//while loop
let i=1;
while(i<=n)
{
  sum+=i;
  i++;
}
console.log(sum)
//do while loop
do{
sum+=i;
i++;}
while(i<=n);
console.log(sum)
//for of loop
//->for (let key in strVar ){}
let str="learning";
let words=0;
for(let i of str){
  console.log(i)
  words++;
}
console.log("No of words",words);
//for in loop
//->for (let key in objVar ){}
let student={
  name:"hari",
  age:14,
  grade:"A",
  isPass:true,
}
for(let key in student){
console.log("key:",key,"detail:",student[key])
}
//odd and even number from 0 to 100
for(i=0;i<=100;i++)
  {
    if(i%2==0)
    {
      console.log("even number:",i)
    }
    else{
    console.log("odd number:",i)}
  }
  //select the random number and ask the user to put the number until the user gets that same number  
  let num=10;
  let result = prompt("enter the number");
  while(result != num){
    result=prompt("you entered wrong number");
  }
  console.log("you won");
  
