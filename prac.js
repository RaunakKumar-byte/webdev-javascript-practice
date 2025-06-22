let heading=document.querySelector("h2");
console.log(heading);

heading.innerText=heading.innerText+"from apna college student";


let divs=document.querySelectorAll(".box");

let idx=1;
for(div of divs){

    div.innerText=`new unique value ${idx}`;
    idx++;
}
