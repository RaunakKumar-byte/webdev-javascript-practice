 /*let arr = [1,2,3,4,5];

arr.forEach(function printval(val){//value at each index
  console.log(val);
});


let arr1=["hli","kdws","deweiuh","wdi"];
arr1.forEach((val,idx,arr1)=>{
    console.log(val.toUpperCase(),idx,arr1);
});


let arr3=[3,4,3,7,9];

function square(arr){
  for(let i=0;i<arr.length;i++){
   arr[i]=arr[i]*arr[i];
   console.log(arr[i]);
  }
}
square(arr3);

arr3.forEach((val)=>{
   console.log(val*val);
});
let calcsquare=(num)=>{
 console.log(num*num);
}

arr3.forEach(calcsquare);

let greet=function(){
  console.log("hello");
}

function multipleGreet(func, count){//higher order function
  for(let i=0;i<=count;i++){
    func();
  }
}
multipleGreet(greet,10);

let odd=function(n){
  console.log(!(n%2==0));
}

let even=function(n){
  console.log(n%2==0);
}

function oddorevenfactory(request) {
   if(request=="odd"){
    let odd=function(n){
      console.log(!(n%2==0));
    }

    return odd;
   }
   else if(request=="even"){
    let even=function(n){
      console.log(n%2==0);
    }
    return even;
   }else{
    console.log("Wrong request");
   }
}*/
/*const mul=(a,b)=>(
    a*b
);
const sum=(a,b)=>(a+b);
const cube=(n)=>(n*n*n);
const print=()=>(console.log("print hello"));
*/
/*console.log("hi there!");

setTimeout(()=>{
    console.log("hi iam raunak singh");
},4000);

console.log("welcome");*/



/*setInterval(()=>{
  console.log("hlo how are you");
},2000);
*/



const student = {
  name:"Aman",
  marks:98,
  prop:this,//global scope

  getName: function(){
    console.log(this);
    return this.name;
  },
  getmarks:()=>{
    console.log(this);
    return this.marks;
  }
};

const a=5;//global scope
