let btn=document.querySelector("#button");

btn.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.clientX,e.clientY);
    console.log(e.target);
};

let btn2=document.querySelector("#button2");
let currentmode="light";

btn2.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currentmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currentmode);
});
