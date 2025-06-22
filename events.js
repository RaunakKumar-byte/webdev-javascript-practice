let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
}

let btn2=document.querySelector("#btn2");
btn2.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}


let btn3=document.querySelector("#btn3");

 
