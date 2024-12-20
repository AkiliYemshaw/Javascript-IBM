//Global Scope
var globalVar = "Global variable";
let globalLet = "Global scoped let";
const globalConst = "Global const";

//Block scope 
{
    var blockVar = "Block-scoped var";
    let blockLet = "Block-scoped let";
    const blockConst = "Block-scoped let";
}

console.log(blockVar);
console.log(blockLet);