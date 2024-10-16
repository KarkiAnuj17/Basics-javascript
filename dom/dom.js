// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+"from me"


// let divs=document.querySelectorAll(".box")

// // divs[0].innerText= "changed first div";
// // divs[1].innerText= "changed second div";
// // divs[2].innerText= "changed third div";
// let i=1;
// for (div of divs){
//   div.innerText=`changed div ${i}`;
//   i++;
// }


let div= document.querySelector("div");
console.log(div);
let classs = div.getAttribute("class");
console.log(classs);
// console.log(div.setAttribute("class","newclass"))

//adding element 
let button=document.createElement("button");
button.innerText="submit";
console.log(button);
let divs=document.querySelectorAll("div");
console.log(divs);

divs[1].style.backgroundColor="blue";

// divs[0].append(button)
// divs[1].prepend(button)
// divs[2].before(button)
divs[2].after(button)

let heading=document.createElement("body");
heading.innerText="hii,welcome to web";
document.querySelector("body").prepend(heading);
let h2=document.querySelector("h2");
h2.remove();