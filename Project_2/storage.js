/** SHOPPING CART */
// collect the elements
const formitem1 = document.querySelector(".formitem1")
const itemname1 = document.querySelector(".itemname")
const itemdescription1 = document.querySelector(".itemdescription").textContent
const saleprice1 = document.querySelector(".saleprice").textContent
const imageitem1 = document.querySelector(".imgitem1").getAttribute('src')
formitem1.addEventListener("submit", function(){
// collect the quantity
    const quantityitem1 = document.querySelector(".quantityinput").value

    // set data into sessionStorage
    sessionStorage.setItem('quantityitem1',quantityitem1)
    sessionStorage.setItem('name_item1', itemname1)
    sessionStorage.setItem('description_item',itemdescription1)
    sessionStorage.setItem('sale_price', saleprice1)
    sessionStorage.setItem('item_image', imageitem1)
})

const formitem2 = document.querySelector(".formitem2")
const itemname2 = document.querySelector(".itemname2")
const itemdescription2 = document.querySelector(".itemdescription2").textContent
const saleprice2 = document.querySelector(".saleprice2").textContent
const imageitem2 = document.querySelector(".imgitem2").getAttribute('src')
formitem2.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem2 = document.querySelector('.quantityinput2').value
    //set data into sessionStorage
    sessionStorage.setItem('quantityitem2', quantityitem2)
    sessionStorage.setItem('name_item2', itemname2)
    sessionStorage.setItem('description_item2',itemdescription2)
    sessionStorage.setItem('sale_price2', saleprice2)
    sessionStorage.setItem('item_image2', imageitem2)
})
const formitem3 = document.querySelector(".formitem3")
const itemname3 = document.querySelector(".itemname3")
const itemdescription3= document.querySelector(".itemdescription3").textContent
const saleprice3 = document.querySelector(".saleprice3").textContent
const imageitem3 = document.querySelector(".imgitem3").getAttribute('src')
formitem3.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem3 = document.querySelector('.quantityinput3').value
    //set data into sessionStorage
    sessionStorage.setItem('quantityitem3', quantityitem3)
    sessionStorage.setItem('name_item3', itemname3)
    sessionStorage.setItem('description_item3',itemdescription3)
    sessionStorage.setItem('sale_price3', saleprice3)
    sessionStorage.setItem('item_image3', imagitem3)
})