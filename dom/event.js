//node.event=()=>{handle here }
//  let button1= document.querySelector("#button1");
//  button1.onclick=()=>{
//     console.log("button was clicked once");
//     let a=5;
//     a++;
//     console.log(a);
//  };

//event listner
//node.addEventListner(event,callback)
//node.removeEventListner(event,callback)
let div= document.querySelector("div");
div.onmouseover=(e)=>{
 console.log("enteerd div");
};
let button2= document.querySelector("#button2");
 button2.ondblclick=(e)=>{
  console.log(e);
  console.log(e.type);
  console.log(e.target);
};

button1.addEventListener("click",(e)=>{
console.log("button was clicked once ");
console.log(e);
console.log(e.type);
console.log(e.target);
});
button1.addEventListener("click",()=>{
  console.log("button was clicked once-twice-thrive ")
  })

let handler=()=>{
  console.log("button was clicked once-twice ")
  };
button1.addEventListener("click",handler);

button1.removeEventListener("click",handler);

let toggle= document.querySelector("#toggle");
// let dark=()=>{
//   let element = document.body;
//   element.classList.toggle("darkmode");
// }
// toggle.addEventListener("click",dark);
let currentMode="light";
toggle.addEventListener("click",()=>{
  if(currentMode=="light"){
    currentMode="dark";
    document.querySelector("body").style.backgroundColor="black";
  }
   else{
    currentMode="light";
    document.querySelector("body").style.backgroundColor="white";

   }
})