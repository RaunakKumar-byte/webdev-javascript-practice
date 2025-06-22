let p=document.querySelector("p");

p.addEventListener("click",function(){
    console.log("paragraph was clicked");
})

let btn =document.querySelector("button");

btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
})


//let inp=document.querySelector("input");
//inp.addEventListener("keydown",function(){
 //   console.log("key was pressed");
//})

let inp=document.querySelector("input");
inp.addEventListener("keyup",function(event){
    console.log("key=",event.key);
    console.log("code=",event.code);
    console.log("key was relesed");
})