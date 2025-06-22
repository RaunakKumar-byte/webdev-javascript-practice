const { profile } = require("./q1");

const student = {
    name: "rs",
    age: 23,
    cgpa: 9.9,
    ispass: true,
}
student["name"] = "raunak singh";
student["age"] = student["age"] + 1;
console.log(student["name"]);
console.log(student["age"]);
console.log(profile);