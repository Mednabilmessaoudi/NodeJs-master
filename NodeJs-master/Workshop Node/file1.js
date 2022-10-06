//Starting with nodeJs
console.log("Starting our nodeJs..");



//Calcul Sum function
function sum(a,b){
    return a+b
}

const input1 = Number(process.argv[2])
const input2 =Number(process.argv[3])

console.log(sum(input1,input2))

//Ending our NodeJs
console.log("Terminate nodeJs.");

module.exports = {sum}

