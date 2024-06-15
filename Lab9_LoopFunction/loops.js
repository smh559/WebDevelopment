console.log("Sophia Huang")
console.log("===== Example 1: for loop as a counter =====")
let i =1;
for(i ; i < 5 ; i++){
    console.log(`iteration = ${i}`)
}

console.log("===== Example 2: for loop as a decrement counter ===== ")
// create a loop counter from 10 to 0 step 1
for(let n =10; n=0 ; n--){
    console.log(`iteration = ${n}`);
}

console.log("===== Example 3: condition inside the loop ===== ")
// check how many even numbers are in between -5 and 5
let counter = 0
for(let m = -5; m<=5 ; m++){
    console.log(`iteration = ${m}`);
    if(m%2 === 0 && m !==0 ){
        counter++
    }
}
console.log(`There is/are ${counter} even numbers`)

console.log("===== Example 4: while loop as a counter ======")
//display number from 0 to 4
let p = 0
while(p<=4){
    console.log(`iteration = ${p}`)
    p++
}

console.log("===== Example 5: while loop application =====")
//guess number game
const SECRET = 8

let guessnumber = parseInt(prompt("Guess a number between 1 and 10"))
while(guessnumber !== SECRET){
    guessnumber = parseInt(prompt("Guess another number between 1 and 10"))
}
console.log(`Great! you guessed it! the number is ${SECRET}`)

console.log("===== Example 6: while loop in a list")
let colors =["magenta", "olive", "babyblue"]
let sizeofcolors = colors.length //returns 3
let index = 0
while(index<sizeofcolors){
    console.log(colors[index])
    index++
}

console.log("===== Example 7: while loop to simulate a password log-in=====")
// terminate the loop if password fails in three attempts
const password = "peterpan"
let userpassword = prompt("Enter a password")
let numberattempt = 0
while(userpassword !== password){
    numberattempt++
    if(numberattempt>2){
        console.log("Your account is locked!")
        break
    }
    userpassword = prompt(`You have ${3-numberattempt} attempts left. Enter a password again`)
}
console.log("Have a good day!")

console.log("===== Example 8: do-while loop to simulate a widthdraw from a bank account")
// user try to withdraw money from an account with balance of $1000.
let widthdraw = 0
let balance = 1000
do{
    widthdraw = parseInt(prompt("How much to do want to widthdraw?"))
    if(widthdraw<=balance){
        balance = balance - widthdraw
        break
    }
    else{
        console.log("Insufficient amount, try again!")
    }
}while(widthdraw>balance)
console.log(`Your new balance is ${balance}`)

console.log("===== Exercise: simulate a bank transaction  ======")
// simulate the collection of a pin number of 4 digits
const pin = 9263
let userpin = prompt("Enter your pin number")
let userattempt = 0
while(pin !== userpin){
    userattempt++
    if(userattempt>2){
        console.log("Your account is locked!")
        break
    }
    userpin = prompt(`You have ${3-userattempt} attempts left. Enter a password again`)
}

do{
    widthdraw = parseInt(prompt("How much to do want to widthdraw?"))
    if(widthdraw<=balance){
        balance = balance - widthdraw
        break
    }
    else{
        console.log("Insufficient amount, try again!")
    }
}while(widthdraw>balance)
console.log(`Your new balance is ${balance}`)
// stimulate the collection of a pin number of 4 digits
// ask the user to pick a transaction: view the balance, deposit, widthdraw --> flow control (if , else if, else)
// ask the user if they want another transaction.
// print result