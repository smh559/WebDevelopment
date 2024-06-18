/**
 * Monday, June 17: events in JS
 * Sophia Huang
 */
//onclick event
// step 1: find and save the element that we want to apply an event
let btn1 = document.querySelector(".btn1")
// step 2: bound the click event to btn1
btn1.onclick = function(){
    alert("HEY THERE")
}

//onmouseover
document.querySelector(".linkqcc").onmouseout = ()=>{
    alert("QCC LINK WAS TOUCHED")
}

// change color div
//step 1: collecct and save the elements
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})

let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
}   

// collect the three buttons
let btnolive = document.querySelector(".btnolive")
let btnorange = document.querySelector(".btnorange")
let btnreset = document.querySelector(".btnreset")



// function
btnolive.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "olive"
})
btnorange.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "orange"
})
btnreset.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "white"
})