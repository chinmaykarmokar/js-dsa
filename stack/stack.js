// 1. Push Pop items in a Stack.
class Stack {
    constructor () {
        this.items = [];
    }

    push (element) {
        this.items.push(element);
        return `The element ${element} is pushed to the stack.`;
    }

    pop () {
        if (this.items.length < 1) {
            return "Cannot pop. Stack empty";
        }
        this.items.pop();
        return "Stack poped successfully."
    }

    peek () {
        if (this.items.length < 1) return "Stack is empty.";
        return `The size of the Stack is ${this.items?.length}`;
    }
}

// 2 and 3. Sort Stack elements
class SortStack {
    constructor (itemsArray) {
        this.items = itemsArray;
    }

    sortDescending () {
        return `The descending sorted stack is: ${this.items.sort().reverse()}.`; 
    }

    sortAsecending () {
        return `The ascending sorted stack is: ${this.items.sort()}.`; 
    }
}

// 4. Reverse Stack Elements
class ReverseStack {
    constructor (itemsArray) {
        this.items = itemsArray;
    }

    reverseGivenStack () {
        return `Reversed stack: ${this.items.reverse()}`;
    }
}