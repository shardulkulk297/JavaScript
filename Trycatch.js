let a  = prompt("Enter first no:")
let b = prompt("Enter second no:")

if(isNaN(a) || isNaN(b))
    {
        throw SyntaxError("ENTER A NUMBER NOT A STRING");

    }


let sum = parseInt(a) + parseInt(b)

function main(){

    try {

        console.log("The sum is ", sum*X);
        return true
        
    } catch (error) {
    
        console.log("ERROR CATCHED")
        return false
        
    }

    console.log("This will not execute but finally will");
    
    finally{
        console.log("POKEMON");
    }
    
    
    

}

