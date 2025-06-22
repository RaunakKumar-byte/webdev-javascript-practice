let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("key=",event.code);
    if(event.code=="keyW"||event.code=="ArrowUp"){
        console.log("character moves forward");
    }
   else if(event.code=="keyS"||event.code=="ArrowDown"){
        console.log("character moves backward");
    }
    else if(event.code=="keyD"||event.code=="ArrowRight"){
        console.log("character moves Right");
    }
   else if(event.code=="keyA"||event.code=="ArrowUp"){
        console.log("character moves left");
    }
})