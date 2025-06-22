/*console.log("welcome to ");
console.log("me");
name = "tony stark";
price = 150.50;
console.log(name);
x = null;
console.log(x);
y = undefined;
console.log(y);
isfollow = false;
console.log(isfollow);
let age = 24;
console.log(age); {
    let age = 23;
    console.log(age);
} {
    let age = 25;
    console.log(age);
}
let f = BigInt("123");
const profile = {
    name: "shradha mam",
    post: 5,
    followers: 120,
    follwing: 23,
    college: "veltech university",


}
console.log(profile);

let num = prompt("enter the number");
if (num % 5 == 0) {
    console.log("num is divisible by 5");
} else {
    console.log("num is not divisible to 5");
} 

let marks = prompt("enter marks");
if (marks >= 80 && marks <= 100) {
    console.log("child found A grade");
} else if (marks >= 70 && marks <= 80) {
    console.log("child are found B grade");
} else if (marks >= 60 && marks <= 70) {
    console.log("child are found c grade");
} else if (marks >= 50 && marks <= 60) {
    console.log("child are found D grade");
} else {
    console.log("fail");
}
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("i=", i);
    }
}*/
//const product = {
//  name: "parker jotter",
// rate: 5,
// discount: 5,
//  price: 230,


//}
//console.log(product);
//console.log(product["name"]);



//
/*const profile = {
    name: "Raunak singh",
    followers: 500,
   following: 200,

post: 23,
    company: "microsoft",
}
console.log(profile);
profile["post"] = profile["post"] + 1;
console.log(profile["post"]);*/


/*let marks = [23, 34, 54, 65, 55];
console.log(marks);
console.log(marks.length);
console.log(marks[1]);

marks[2] = 33;
console.log(marks);
for (let i = 0; i < 5; i++) {
    console.log(marks[i]);}
for (idx of marks) {
    console.log(marks);
}/*
/*let cities = ["patna", "arban", "delhi", "barh"];

for (let city of cities) {
    console.log(city.toUpperCase());
}*/
//qn
/*let marks1 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks1.length; i++) {
    sum = sum + marks1[i];

}
average = sum/marks1.length;

console.log("average of student is", average);*/


/*let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
    price[i] = price[i] / 100 * 90
}
console.log("value at index ", price);*/

/*let veg = ["parot", "mixvage", "oijfir"];
veg.push("root","rock");
console.log(veg);*/

/*let marel_heroes = ["irron man", "thor", "thor"];
let dc_heroes = ["super man", "america"]
let indian_heroes = ["krish", "shaktiman"];
let all_heroes = marel_heroes.concat(dc_heroes, indian_heroes);
console.log(all_heroes);

let hero = marel_heroes.shift();
console.log("deleted heroes are", hero);*/

/*let marel_heroes1 = ["iron man", "spiderman", "thor", "captain america"];
console.log(marel_heroes1);
console.log(marel_heroes1.slice(1, ));
console.log(marel_heroes1.slice(1, 3));*/

/*let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 99, 77);
console.log(arr);

//elemnt add only
arr.splice(2, 0, 101);
console.log(arr);

//delete element only

arr.splice(4,1);
//replace element
arr.splice(4,1,111);*/




/*let companies = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//companies.splice(0, 1);
//console.log(companies);
//companies.splice(2, 1, "ola");
//console.log(companies);

companies.push("Amazon");
console.log(companies);*/









////function

/*function myfunction() {
    console.log("thies is me djrr");
    console.log("my name is that's u know");
}
myfunction();*/


/*function myfunction(msg)//parrameter
 {
    console.log(msg);
}
myfunction("i love js",100);//argument*/

/*function sum(a, b) {
    console.log(a + b);
}
sum(1, 3);*/





/*function sum(x,y){
    s=x+y;
    return s;
}
let val = sum(3,4);
console.log(val);*/

//sum function
/*function sum(a, b){
    return a+b;
}
//modern javascript is arrow function

const arrowsum = (a, b)=> {
    console.log(a +b);
}

//multiply function

function mult(a, b){
    return a *b;
}

const arrowmult = (a, b)=>{
    console.log(a*b);
}*/






/*function countvowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u") {
            count++;
        }
        console.log(char);

    }
    console.log(count);


}*/
/*const countvw = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u") {
            count++;
        }
        console.log(char);

    }
    console.log(count);

}*/

//for each loop in arrays

/*let arry = [1, 2, 3, 4, 5];
arry.forEach(function printval(val) {
    //each value at each index
    console.log(val);

});*/

/*let arr = ["pune", "delhi", "oatna", "patna", "rachi"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});*/



/*let array1 = [2, 5, 8, 9, 3];

array1.forEach((val) => {
    console.log(val * val);
})



let num = [23, 34, 45, 21];

let calsq = (num) => {
    console.log(num * num);
}

num.forEach(calsq);*/
console.log("5" == 5);  // true (string "5" is converted to the number 5)
alert("Hello, welcome to my website!");
let userName = prompt("Please enter your name:", "John Doe");
alert("Hello, " + userName + "!");

