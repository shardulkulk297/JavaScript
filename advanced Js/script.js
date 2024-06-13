async function sleep(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve(45);

        },1000);

    })
}


// let a = await sleep();
// let b = await sleep();

//this will not run to solve this we need to use the IIFE immediately invoked function Expression

(async function main(){
    let a = await sleep();
    console.log(a)
    let b = await sleep();
    console.log(b)
})





