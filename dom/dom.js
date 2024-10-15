let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+"from me"


let divs=document.querySelectorAll(".box")

// divs[0].innerText= "changed first div";
// divs[1].innerText= "changed second div";
// divs[2].innerText= "changed third div";
let i=1;
for (div of divs){
  div.innerText=`changed div ${i}`;
  i++;
}