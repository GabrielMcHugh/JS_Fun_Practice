// Write a function identity that takes an argument and returns that argument
function identity(x) {
	return x;
}
console.log(
	"identity(1) returns:", identity(1), "\n" +
	"identity(-1) returns:", identity(-1))

//Write a binary function addb that takes two numbers and returns their sum
function addb(a, b) {
	return a + b;
}
console.log(
	"addb(1,2) returns:", addb(1,2), "\n" +
	"addb(4,-7) returns:", addb(4,-7))

//Write a binary function subb that takes two numbers and returns their difference
function subb(a,b) {
	if (a > b) {return a - b};
	return b - a;
}

console.log(
	"subb(2,1) returns:", subb(2,1), "\n" +
	"subb(4,7) returns:", subb(4,7))

//Write a binary function mulb that takes two numbers and returns their product
function mulb(a,b) {
	return a*b;
}

console.log(
	"mulb(2,1) returns:", mulb(2,1), "\n" +
	"mulb(4,7) returns:", mulb(4,7))

//Write a binary function minb that takes two numbers and returns the smaller one
function minb(a,b) {
	if (a < b) {
		return a;
	}
	return b;
}

console.log(
	"minb(2,1) returns:", minb(2,1), "\n" +
	"minb(4,-7) returns:", minb(4,-7))

//Write a binary function maxb that takes two numbers and returns the larger one
const maxb = function assignedFunction(a,b) {
	if (a > b) {
		return a;
	}
	return b;
}

console.log(
	"maxb(2,1) returns:", maxb(2,1), "\n" +
	"maxb(4,-7) returns:", maxb(4,-7))

//Write a function add that is generalized for any amount of arguments
/* For loop method
- the spread operator gathers remaining operators and turns them into an array
*/
const add = function assignedFunction(...nums) {
	for (i = 0, sum = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return sum;
}
console.log("add(3,9,8,12) returns: ", add(3,9,8,12))

/* Reduce method
- I didn't simplify it because I was trying to experiment and understand how the reduce
method worked
*/
const add = function assignedFunction(...nums) {
	initialValue = 0;
	return nums.reduce(function reducer(accumulator, item) {
		return accumulator + item;
	}, initialValue)
}
console.log("add(3,9,8,12) returns: ", add(3,9,8,12))

/* Slight cleaner reduce method
- to make it more obvious what I did
*/
const add = function assignedFunction(...nums) {
	initialValue = 0;

	const reducer = function reducer(accumulator, item) {return accumulator + item}

	return nums.reduce(reducer, initialValue)
}
console.log("add(3,9,8,12) returns: ", add(3,9,8,12))

//Write a function sub that is generalized for any amount of arguments
/* Reusing assigned function to point out that when assigning a function
to a variable, the function name is 'discarded' and thus can be reused*/
const sub = function assignedFunction(...nums) {
	function assignedFunction(accumulator, item) {
		if (accumulator > item) {
			return accumulator - item;
		}
		return item - accumulator;
	}

	return nums.reduce(assignedFunction, 0)
}
console.log("sub(3,9,8) returns: ", sub(3,9,8))


//Write a function max that is generalised for any amount of arguments

const max = (...nums) => {return nums.reduce((a,b) => a > b ? a : b);}
console.log(max(7, 73, 100, 1, 35, -1, -9, 10, 67))


//Write a function addRecurse that is the generalised add function but uses recursion

const addRecurse = (...nums) => {
	if (nums.length < 1) //base case
		return 0
	return nums[0] + addRecurse(...nums.slice(1))
}
console.log(addRecurse(1,2,3,5))

// Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
	if (nums.length < 1)
		return 1;
	return nums[0] * (mulRecurse(...nums.slice(1)))
}
console.log(mulRecurse(1,2,3,4)) //should equal 24