// 1.	What do each of the following Boolean expressions evaluate to?
// Boolean Expression	Answer
// true && false
// true || false
// false && false
// true && (false || true)
// false || (true && false)
// false || 1 < 5
// 5 >= 4 && 1 > 3
// 10 < 4 || 1 > 4
// 12 >= 2 && 1 < 24
// ‘Hello’.charAt(0) == ‘h’

console.log(true && false); // false
console.log(true || false); // true
console.log(false && false); // false
console.log(true && (false || true)); //true
console.log(false || (true && false)); //false
console.log(false || 1 < 5); //true
console.log(5 >= 4 && 1 > 3); //false
console.log(10 < 4 || 1 > 4); // false
console.log(12 >= 2 && 1 < 24); // true
console.log('Hello'.charAt(0) == 'h'); // false needs to be 'H' to be true

// 2.	In your editor, create a new directory for this project. Create an index.html and index.js file. Link the JavaScript file to the HTML file. In the JavaScript file create the following Boolean variables and choose what values they hold:
// a.	isHotOutside
// b.	isWeekday
// c.	hasMoneyInPocket

let isHotOutside = false;
let isWeekday = true;
let hasMoneyInPocket = false;

// 3.	Create the following variables and assign them values (the assigned values should not be Boolean):
// a.	costOfMilk
// b.	moneyInWallet
// c.	thirstLevel (how thirsty you are on a scale of 1-10)

let costOfMilk = 2;
let moneyInWallet = 20;
let thirstLevel = 4;

// 4.	Using the variables you created above and Boolean operators, create variables for the following scenarios:
// a.	shouldByIcecream – this should be true if it is hot outside and there is money in your pocket
// b.	willGoSwimming – this should be true if it is hot outside and it is not a weekday
// c.	isAGoodDay – this should be true if it is hot outside, there is money in your pocket, and it is not a weekday
// d.	willBuyMilk – this should be true if it is hot outside, and thirstLevel is greater than or equal to 3, and moneyInWallet is greater than or equal to 2 times the cost of milk.
// Example: If I had the variables isWeekday and isSummer and I was going to create a variable isSchoolDay, I would do something like the following:
// var isSchoolDay = isWeekday && !isSummer;

let shouldByIcecream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekday;
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= costOfMilk * 2;

// 5.	Log the values to the console.
console.log(shouldByIcecream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);


