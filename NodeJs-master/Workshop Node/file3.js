const fs = require("fs");

console.log("File system Starting..");

// fs.writeFile("test.txt", "hello world", (err) => {
//   if (err) {
//     console.log(err);
//     clear;
//   } else {
//     console.log("File succesfuly created.");
//   }
// });

// console.log("our File is created.")
console.log("File system Rename..");

// fs.rename("test.txt","file.txt",err=>{
//     console.log(err);
// })

// fs.appendFile("test.txt", "This is the new entry", (err) => {
//   err ? console.log(err) : console.log("added succesfuly");
// });

//delete file
// fs.unlink("text.txt",err=>{
//     err?console.log(err):console.log("file deleted");;
// })


// Use third part libary
const { v4: uuidv4 } = require('uuid');

const person = {
    id:uuidv4(),
    name:"Hechmi",
    Lastname:" Chabeni",
    "Date of birth":"1997",
    number:"52223373"
}

console.log(person);
console.log(person.name,"this is the name");
console.log(person["Date of birth"],"this is the DOB");
