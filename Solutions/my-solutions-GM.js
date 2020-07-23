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
	return a - b;
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