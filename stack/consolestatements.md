// Problem 1
const stack = new Stack();

console.log(stack.peek());
console.log(stack.push("Chinmay"));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());

// Problem 2 and 3
const sortStack = new SortStack(["Seema", "Tanmoy", "Chinmay", "Madhusudan"]);
console.log(sortStack.sortDescending());
console.log(sortStack.sortAsecending());

// Problem 4
const reverseStack = new ReverseStack(["FC Barcelona", "Real Madrid", "Manchester City", "Bayern Munich"]);
console.log(reverseStack.reverseGivenStack());