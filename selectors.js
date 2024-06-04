let box = document.getElementsByClassName("box")

//box will get iterated over index [] from 0

box[2].style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "red";
//query selector will only be applied to only first element of that class

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="orange";
})

//if we just did like document.querySelectorAll(".box").style.backgroundColor = "green" then it will do nothing andf will give error it only returns HTML Selection so we have to use for loop to actually apply stat style to all the elements of that class

