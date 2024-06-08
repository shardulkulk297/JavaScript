async function getData() {
    //simulate getting data from server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    // let data = await x.text()

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.text()


    return data

    //this is returning promise

}

async function main() {

    //settle means resolve or reject
    //resolve: successful, reject: unsuccessful



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


