
console.log(a); //a will be hosted at the top of the block because of var
var a = 16;

console.log(sayhello())

function sayhello(){
    return "hello"

}

//the function will also be hoisted to the top but this cannot be done with the const functions;