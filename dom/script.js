//Selecting with id
//->document.getElementById("myId");
// let header=document.getElementById("heading");
// console.log(header);

// //selecting with class->returs html collection
// //->documnet.getElementByClassName("MyClass")
// let headings=document.getElementsByClassName("header");
// console.log(headings);

// //selecting with tag
// //->document.getElementsByTagName("p")
// let para=document.getElementsByTagName("p");
// console.log(para);

//query selector
//->document.querySelector("myId/myClass/tag") --->selects first element
//->document.querySelectorAll("myId/myClass/tag")--->selects all element/returns nodeList
//for paragraph
let paraElement= document.querySelector("p");
console.log(paraElement);
let allParaElement= document.querySelectorAll("p");
console.log(allParaElement);
//for class
let classElement= document.querySelector(".header");
console.log(classElement);
let allClassElement= document.querySelectorAll(".header");
console.log(allClassElement);
//for id
let idElement= document.querySelector("#heading");
console.log(idElement);
let allIdElement= document.querySelectorAll("#heading");
console.log(allIdElement);

//properties
//->tagName--->returns tag for element node--> variable.tagName
//->innerText--->returns all the text content of the element and all its children
document.querySelector("div")
document.querySelector("div").children
console.dir(document.body.firstChild);
let div=document.querySelector("div");
console.dir(div);

//attributes
//->getAttribute(attr)-->to get attribute value
//->set attribute(attr,value)-->set the value of attribute

//adding element
//-->first step:create element by let el= document.createElemetn("div")
//-->then add the element by:
//1)node.append(el)-->adds at the end of node(inside)
//2)node.prepend(el)-->adds at the start of node(inside)
//3)node.before(el)-->adds before the node(outside)
//4) node.after(el)-->adds after the node(outside)

//delete element
//node.remove()-->removes the node