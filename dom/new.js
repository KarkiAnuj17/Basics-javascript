let button= document.createElement("button");
button.innerText="click me!";
button.style.backgroundColor="red";
button.style.color="white";
let firstElement = document.querySelector("body");
firstElement.prepend(button);

let para=document.querySelector("p");
// let myClass = para.getAttribute("class");
// console.log(para.setAttribute("class","newClass"));
// using classList to provide two classes to para
console.log(para.classList.add("newClass"));

