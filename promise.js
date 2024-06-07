console.log("This are promises")
let prom1 = new Promise((resolve, reject) => {

    let a = Math.random()
    if (a < 0.5) {
        reject("no random no. supported");
    }

    else {


        setTimeout(() => {


            console.log("pokemon")
            resolve("ash")
        }, 2000)


    }



}
)

let prom2 = new Promise((resolve, reject) => {

    let a = Math.random()
    if (a < 0.5) {
        reject("no random no. supported2");
    }

    else {


        setTimeout(() => {


            console.log("pokemon2")
            resolve("ash2")
        }, 1000)


    }



}
)

// let p3 = Promise.all([prom1, prom2])

// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// 
// let p3 = Promise.allSettled([prom1, prom2])

// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.race([prom1, prom2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})