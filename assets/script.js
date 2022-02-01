
let yourName = "Jackson Norris"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const totalQty = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

function updateTotal() {
    totalQty.innerHTML = gb + cc + sugar
}

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb++
    gbQty.innerHTML = gb
    updateTotal()
})

// TODO: Hook up event listeners for the rest of the buttons

gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb--
        gbQty.innerHTML = gb
        updateTotal()
    }
})
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccQty.innerHTML = cc
    updateTotal()
})
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc--
        ccQty.innerHTML = cc
        updateTotal()
    }
})
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarQty.innerHTML = sugar
    updateTotal()
})
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        sugarQty.innerHTML = sugar
        updateTotal()
    }
})
