// Object with coins as vars (quarters, nickels, dimes, pennies)
var piggyBank = {quarters: 15, nickels: 20, dimes: 25, pennies: 30};

// Get dollar amount
var dollarAmount = ((piggyBank.quarters * .25) + (piggyBank.nickels * .05) + (piggyBank.dimes * .1) + (piggyBank.pennies * .01));

console.log(dollarAmount);