let n = 5;


const factorial = ((n) => {

    let fact = 1;

    if (n == 1 || n == 0) {
        fact = 1;
        return fact;
    }
    else {
        for (let i = 2; i <= n; i++) {
            fact = fact * i;
            
        }
        return fact;

    }



})

console.log(factorial(n))