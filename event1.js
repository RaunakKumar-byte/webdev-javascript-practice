let btns=document.querySelectorAll("button");

for(btn of btns){
//btn.onclick=sayHello;
//btn.onclick=sayName;//run only one

//btn.addEventListener("click",sayHello);
//btn.addEventListener("click",sayName);

btn.addEventListener("dblclick",function(){
    console.log("you dubbled clicked on me");
})
}

function sayHello(){
    alert("Helo!");
}

function sayName(){
    alert("Apna college");
}