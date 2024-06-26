/* SURVEY FORM */
// collect components
const myform = document.querySelector(".myform")
const displayresult = document.querySelector(".displayresult")

myform.addEventListener("submit",function(event){
//collect values after submitting the form
const username = document.querySelector("#firstname").value
const fav_language = document.querySelector("input[name='fav_language']:checked").value
/*
// to test if the data was collected, we can set preventDefault for event.PreventDefault()
event.preventDefault()
displayresult.innerHTML = `Username: ${username}<br>Favorite Web language: ${fav_language}`
*/

// save the data, username and favorite language
sessionStorage.setItem('firstname', username)
sessionStorage.setItem('selection_language', fav_language)
sessionStorage.setItem('product123', "Product Name")

})

/** SHOPPING CART */
// collect the elements
const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector(".itemname")
const itemdescription = document.querySelector(".itemdescription").textContent
const saleprice = document.querySelector(".saleprice").textContent

formitem1.addEventListener("submit", function(){
// collect the quantity
const quantityitem1 = document.querySelector('.quantityinput').
value

// set data into sessionStorage
sessionStorage.setItem('quantityitem1',quantityitem1)
sessionStorage.setItem('name_item1', itemname)
sessionStorage.setItem('description_item',itemdescription)
sessionStorage.setItem('sale_price', saleprice)
})