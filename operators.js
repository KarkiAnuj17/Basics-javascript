let a=7;
let b=9;
console.log("a = ",a , "& b =",b);
//arthemetic operators
console.log("a + b =",a+b); //addition
console.log("a - b =",a-b); //subtraction
console.log("a * b =",a*b); //multiplication
console.log("a / b =",a/b); // division;
console.log("a % b =",a%b); // modulus
console.log("a ** b =",a**b) ;//exponential

//assignment operators
a += 1;
console.log("a =",a);
a-=1;
console.log("a=",a);

//unary operators
console.log("a =",a++,"& b",b++); //post increment
console.log("a =",a,"& b",b);
console.log("a =",++a,"& b",++b);//pre increment
console.log("a =",a--,"& b",b--); //post decrement
console.log("a =",a,"& b",b);
console.log("a =",--a,"& b",--b);//pre decrement

//logical operators
console.log(a==7 && a<b && b==9); //logical and
console.log(a!==7 || a>b || b==9);//logical or
console.log(!(a<=b));//logical not

//comparison operator
console.log(a==b); //equalto
console.log(a!=b); //notequalto
console.log(a===b); //equalto & datatype
console.log(a!==b); //notequalto & datatype
console.log(a>=b);//greater
console.log(a<=b);//smaller

//ternary operator
//-> condition?true output: false output;
let number=16
let result = number%2==0? "even": "oddnum";
console.log(result)