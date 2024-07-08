// collect the elements
const priceitem_display = document.querySelector('.priceitem_display')
const quantitydisplay = document.querySelector('.quantity_display')
const totalprice_display = document.querySelector('.totalprice_display')
const itemimg_display = document.querySelector('.itemimg')
const itemdescription_display = document.querySelector('.itemdescription_display')

//get values for quantity and price per unit
const priceitem = sessionStorage.getItem('sale_price')
const quantityitem = sessionStorage.getItem('quantityitem1')
const itemimage = sessionStorage.getItem('item_image')
const description_item = sessionStorage.getItem('description_item')

//calculate for the total price
const totalprice = (priceitem*quantityitem).toFixed(2)

/*
//print the price, quantity and total price in the collected elements
priceitem_display.innerHTML = `$ ${priceitem}`
quantitydisplay.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `${totalprice}`
*/

// append image description
let image = document.createElement('img')
image.src = sessionStorage.getItem('item_image')
image.style.width = "30px"

itemimg_display.append (image)

// append product description
let product = document.createElement('p')
product.innerHTML = description_item
itemdescription_display.append(product)

//append price
let productprice = document.createElement('p')
productprice.innerHTML = priceitem
priceitem_display.append(productprice)

//append quantity
let totalquantity = document.createElement('p')
totalquantity.innerHTML = sessionStorage.getItem('quantityitem1')
quantitydisplay.append(totalquantity)

//append total price
let t = document.createElement('p')
t.innerHTML = `$ ${totalprice}`
totalprice_display.append(t)

/** ===================== PRODUCT 2 ================================= */
// collect the elements
const priceitem_display2 = document.querySelector('.priceitem_display2')
const quantitydisplay2 = document.querySelector('.quantity_display2')
const totalprice_display2 = document.querySelector('.totalprice_display2')
const itemimg_display2 = document.querySelector('.itemimg2')
const itemdescription_display2 = document.querySelector('.itemdescription_display2')

//get values for quantity and price per unit
const priceitem2 = sessionStorage.getItem('sale_price2')
const quantityitem2 = sessionStorage.getItem('quantityitem2')
const itemimage2 = sessionStorage.getItem('item_image2')
const description_item2 = sessionStorage.getItem('description_item2')

//calculate for the total price
const totalprice2 = (priceitem2*quantityitem2).toFixed(2)

/*
//print the price, quantity and total price in the collected elements
priceitem_display.innerHTML = `$ ${priceitem}`
quantitydisplay.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `${totalprice}`
*/

// append image description
let image2 = document.createElement('img')
image2.src = itemimage2
image2.style.width = "30px"

itemimg_display2.append(image2)

// append product description
let product2 = document.createElement('p')
product2.innerHTML = description_item2
itemdescription_display2.append(product2)

//append price
let productprice2 = document.createElement('p')
productprice2.innerHTML = priceitem2
priceitem_display2.append(productprice2)

//append quantity
let totalquantity2 = document.createElement('p')
totalquantity2.innerHTML = quantityitem2
quantitydisplay2.append(totalquantity2)

//append total price
let t2 = document.createElement('p')
t2.innerHTML = `$ ${totalprice2}`
totalprice_display2.append(t2)

/**======================= Product 3=============================== */
// collect the elements
const priceitem_display3 = document.querySelector('.priceitem_display3')
const quantitydisplay3 = document.querySelector('.quantity_display3')
const totalprice_display3 = document.querySelector('.totalprice_display3')
const itemimg_display3 = document.querySelector('.itemimg3')
const itemdescription_display3 = document.querySelector('.itemdescription_display3')

//get values for quantity and price per unit
const priceitem3 = sessionStorage.getItem('sale_price3')
const quantityitem3 = sessionStorage.getItem('quantityitem3')
const itemimage3 = sessionStorage.getItem('item_image3')
const description_item3 = sessionStorage.getItem('description_item3')

//calculate for the total price
const totalprice3 = (priceitem3*quantityitem3).toFixed(3)

/*
//print the price, quantity and total price in the collected elements
priceitem_display.innerHTML = `$ ${priceitem}`
quantitydisplay.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `${totalprice}`
*/

// append image description
let image3 = document.createElement('img')
image3.src = itemimage3
image3.style.width = "30px"

itemimg_display3.append(image3)

// append product description
let product3 = document.createElement('p')
product3.innerHTML = description_item3
itemdescription_display3.append(product3)

//append price
let productprice3 = document.createElement('p')
productprice3.innerHTML = priceitem3
priceitem_display3.append(productprice3)

//append quantity
let totalquantity3 = document.createElement('p')
totalquantity3.innerHTML = quantityitem3
quantitydisplay3.append(totalquantity3)

//append total price
let t3 = document.createElement('p')
t3.innerHTML = `$ ${totalprice3}`
totalprice_display2.append(t3)