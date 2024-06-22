/* SURVEY FORM */
// collect components
const myform = document.querySelector(".myform")
const displayresult = document.querySelector(".displayresult")

myform.addEventListener("submit", function(event){
    //collect values after submitting the form
    const username = document.querySelector("#firstname").value
    const fav_language = document.querySelector("input[name='fav_language']: checked").value
    
    // to test if the data was collected, we can set preventDefault for the form
    event.preventDefault()
    displayresult.innerHTML = `Username: ${username} <br>Favorite Web language: ${fav_language}`
    

// save the data, username and favorite language
    sessionStorage.setItem('firstname', username)
    sessionStorage.setItem('selection_language', fav_language)
    sessionStorage.setItem('product123')
})

