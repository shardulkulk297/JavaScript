document.querySelectorAll(".box").forEach(e=>{

    // let a = Math.random()
    // let b = Math.random() this was not working because random generates values in between 0 to 1 and we need values that are in between 0 to 255 for rgb
    // let c = Math.random()
    let a = Math.random() * 255
    let b = Math.random() * 255
    let c = Math.random() * 255

    e.style.backgroundColor = `rgb(${a}, ${b}, ${c})`

  
})