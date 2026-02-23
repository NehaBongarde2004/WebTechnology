// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white"

// document.querySelector("body").prepend(newBtn)


//Q.2
//let para = document.querySelector("p")


//video8 Q

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener('click',()=>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
    
})