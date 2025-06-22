let h1=document.querySelector("h1");

/*setTimeout(()=>{
    h1.style.color="red";
},1000);
setTimeout(()=>{
    h1.style.color="green";
},2000);*/


function changecolor(color,delay, nextcolorchange){
    setTimeout(() =>{
        h1.style.color=color;
        if(nextcolorchange)nextcolorchange();
    },delay);
}


/*
changecolor("red",3000);
changecolor("green",4000);
changecolor("voilet",5000);
changecolor("aqua",6000);*/


changecolor("red",1000, ()=>{
    changecolor("yellow",1000, ()=>{
        changecolor("green",1000, ()=>{
            changecolor("orange",1000, ()=>{
                changecolor("blue",1000, ()=>{
    
                });
    
            });
    
        });
    
    });
});




//callback hell





function savetoDb(Data) {
    return new Promise((resolve, reject)=>{
      let internetspeed=Math.floor(Math.random()*10)+1;

      if(internetspeed>4){
        resolve("success : data was saved");
      }
      else{
        reject("failure : weak connection");
      }
    });
}