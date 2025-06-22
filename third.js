//for of loop?let size=0;
/*let str="Apna college";
for(let i of str){
    console.log("i=",i);
size++;
}
console.log("size of string is",size);


//student is object
let student={
    name:"khushi",
    age:20,
   cgpa:7.7,
   ispass:true,
}

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}

for(var i=0;i<=100;i++){
    if(i%2==0){
    iseven=true;
    console.log(i);
    }
    
}

let gameNum=25;
let usernum=prompt("Enter number by user");
while(usernum!=gameNum){
    usernum=prompt("you enterd wrong number. guess again");
}
console.log("congratualationa, you entered right number");

let str="Raunak singh";
let str2="Khushi";
str3=str.slice(1,);
console.log(str3);
console.log(str.concat(str2));
console.log(str.charAt(3));
console.log(`my name is raunak singh and length of str is${str.length} and length of str2 is ${str2.length}`);

let str4="MY name is khushi singh and i am wife of Raunak singh";
console.log(str4.replace("singh","raunaksingh"));

str5="Khshi"+123;
console.log(str5);
str8="Just i love javascript";

console.log(str8.replace("just","notjust"));

let fullname=prompt("enter your fullname without space");
let username="@"+fullname+fullname.length;
console.log(username);

let marks=[85,97,44,37,76,60];
let k=0;
for(var i=0;i<marks.length;i++){
    k=k+marks[i];
}
console.log(k/6);

for(let val of marks){
    console.log(val);
}


let itemspr=[250,645,300,900,50];
let offer;
for(let i=0;i<itemspr.length;i++){
offer=itemspr[i]/10;
itemspr[i]=itemspr[i]-offer;
}

for(let i=0;i<itemspr.length;i++){
    console.log(itemspr[i]);
}
 

let fooditems=["pottatoes","papita","burger"];
fooditems.push("makha","Chakha");
console.log(fooditems);

let deleteditems = fooditems.pop();
console.log(deleteditems);

console.log(fooditems.toString());

let companies=["Bloomberg","Microsoft","Uber","Googlle","IBM","Netflix"];

let c1=companies.shift();
console.log(c1);
companies.splice(2,1,"Rajsingh");
console.log(companies);
companies.push("Amazon");
console.log(companies);*/



//function
function myfunc(){
    console.log("we are learning js");
    console.log("and we are very exicited");
}
myfunc();

function yourfun(msg,n){
    console.log(msg,n);//parameeter
}
yourfun("argument is called function",100);

function sum(x,Y){
    s=x+Y;
    console.log("before return");
    return s;
}
function sum1(a,b){
    return a+b;
}


const subtr=(c,d)=>{
    return c-d;
}

const print=()=>{
    console.loh("Hello mam");
};

function countvowel(str){
    //""
    let count=0;
    for(const char of str){
        if(char==="a" ||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"
        ){
            count++;
        }
    }
    console.log(count);
}