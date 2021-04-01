// 6.	Create a new file called loops.js and link it to your HTML file. Create the following loops with any variables you feel are needed:
// a.	A while loop that prints all even numbers from 0 to 100

let a = 0;

while (a <= 100) {
	if (a % 2 == 0) {
		console.log(a);
	}
	a++;
}
// b.	A while loop that prints every 3rd number going backwards from 100 until we reach 0
let b = 100;

while (b <= 100 && b >= 0) {
	if (b % 3 == 1) {
		console.log(b);
	}
	b--;
}

// c.	A for loop that prints every other number from 1 to 100

for (i = 1; i <= 100; i++) {
	if (i % 2 == 1) {
		console.log(i);
	}
}
// d.	A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.

for (i = 0; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('HelloWorld');
	} else if (i % 5 == 0) {
		console.log('World');
	} else if (i % 3 == 0) {
		console.log('Hello');
	} else {
		console.log(i);
	}
}
