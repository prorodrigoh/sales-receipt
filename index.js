const subTotal = 19.75
const taxRate = 0.07

function calculateTax(subTotal, taxRate){
    return subTotal*taxRate
}

function calculateTotal(subTotal, taxValue){
    return subTotal+taxValue
}

const taxValue = calculateTax(subTotal, taxRate)
const total = calculateTotal(subTotal, taxValue)

console.log(`
Subtotal:....$ ${subTotal.toFixed(2)}
Tax:.........$ ${taxValue.toFixed(2)}
-------------------
Total:.......$ ${total.toFixed(2)}
`)

// doesn't work with node, only on terminal
// console.log("Subtotal:....$ %f",subTotal)
// console.log("Tax:.........$ %.2f",taxValue)
// console.log("----------------------")
// console.log("Total:.......$ %f",total)