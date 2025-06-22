console.log("Raja");
//useing id
let heading=document.getElementById("heading");
console.dir(heading);

//acessing by classs

let class1=document.getElementsByClassName("heading-class");
console.dir(class1);
console.log(class1);

//acessing tags like pargraph,h1,h2,div

let paras=document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);

//acessing querry selector

let elements=document.querySelector("p");//first elements means 1st parasg
console.dir(elements);


let elements3=document.querySelectorAll("#heading");//acessing id
console.dir(elements3);


let elements4=document.querySelectorAll(".heading-class");//acessing all class
console.dir(elements4);


