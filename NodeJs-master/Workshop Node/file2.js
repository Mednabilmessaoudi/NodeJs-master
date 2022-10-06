 const obj = require("./file1")

 console.log("This is the second file Starting..")

 const input1 = Number( process.argv[2])
 const input2 = Number(process.argv[3])


console.log(obj.sum(input1,input2))


console.log("End of the  second file .")



