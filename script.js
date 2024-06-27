function greeting(personName){
    // blokk med kode som funksjonen består av
    let greeting = "greeting" + personName

    console.log(greeting)
}

greeting("Per")
greeting("Pål")
greeting("Espen")


function buttonHandler() {
console.log ("button clicked")
}

// hent ut "example-button" fra dokumentet
let myButton = document.getElementById("example-button")
console.log(myButton)
console.dir(myButton)

myButton.addEventListener("click", buttonHandler)


// Setup Counter
let counter = document.querySelector("#counter")
console.log(counter)

// Hent ut display elementet
let displayElement = counter.querySelector("span")
console.log(displayElement)

// funksjonen
function increment(){
    // les av DOM verdien og konverter til et tall
    let value = Number (displayElement.textContent)
    // Gjør utregningen som måtte trengs
    let newValue = value + 1
    // oppdater DOMet med den nye verdien
    displayElement.textcontent = newValue
}

function decrement(){
    let value =
    console.log("decrementing")
}

function reset(){
    let value = 
    console.log("resetting")
}

// koble funksjoner til knappen
// let counter = document.querySelector("#counter")
// console.log(counter)

// hentet ut alle knappene
let incrementButton = counter.querySelector("button:nth-child(2")
let decrementButton = counter.querySelector("button:nth-child(3")
let resetButton = counter.querySelector("button:nth-child(4")
console.log(incrementButton)
console.log(decrementButton)
console.log(resetButton)

incrementButton.addEventListener("Click", increment)
decrementButton.addEventListener("Click", decrement)
resetButton.addEventListener("Click", reset)