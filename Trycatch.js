let a  = prompt("Enter first no:")
let b = prompt("Enter second no:")

if(isNaN(a) || isNaN(b))
    {
        throw SyntaxError("ENTER A NUMBER NOT A STRING");

    }


let sum = parseInt(a) + parseInt(b)

try {

    console.log("The sum is ", sum*X);
    
} catch (error) {

    console.log("ERROR CATCHED")
    
}

finally{
    console.log("POKEMON");
}


