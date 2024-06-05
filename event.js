let button = document.getElementById("btn");


button.addEventListener("click", ()=>{
        document.querySelector("#btn").innerHTML = "POKEMON"


    
})

button.addEventListener("dblclick", ()=>{
    document.querySelector("#btn").innerHTML = "POKEMON*2"

})

button.addEventListener("contextmenu", ()=>{
    document.querySelector("#btn").innerHTML = "don'trightclick"

})

button.addEventListener("keydown", (e)=>{
    console.log(e);

})