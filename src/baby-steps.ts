let total = 0
//let number = 0

function sum(){
    for (let index = 2; index < process.argv.length; index++) {
        total += Number(process.argv[index]);
        
    }
    
    return total
}

console.log(sum())