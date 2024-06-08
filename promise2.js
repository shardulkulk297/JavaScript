async function getData(){
    //simulate getting data from server
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("pokemon")
        }, 3000)

    })
 
}

async function main(){



console.log("Loading modules")
console.log("LoadingModules")
console.log("load data")

let data = await getData()
// data.then((v)=>{

//     console.log(data)

// console.log("process data")

// })


console.log(data)

console.log("process data")

}

main()


