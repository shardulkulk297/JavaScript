const ash = (arg) => {
    console.log(arg)
  
}

const callback = (arg, ash) => {

    console.log(arg)
  
}


const loadScript = (src, callback) => {

    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("ash");
    document.head.append(sc)
  
}

loadScript("sc.js", callback);

