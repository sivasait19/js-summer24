/*Homework: OOP Dynamic List / Array Implementation
Given the DynamicList class below, implementing the remaining 5 methods. The code for the
DynamicList class is also available on my github at dynamic list class*/


class DynamicList {
    array;
    capacity;
    size;

    constructor(capacity = 3) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.size = 0;
    }

    print() {
        if (this.size === 0) {
            console.log("[]");
            return;
        }
        let str = "[";
        for (let i = 0; i < this.size; i++) {
            str += " " + this.array[i];
            if (i < this.size - 1) str += ",";
        }
        str += " ]";
        console.log(str);
    }

    addCapacity() {
        if (this.hasCapacity()) return;
        console.log("adding capacity");
        this.capacity = this.capacity * 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    hasCapacity() {
        return this.size < this.capacity;
    }

    push(element) {
        this.addCapacity();
        this.array[this.size] = element;
        this.size++;
        return true;
    }

    unshift(element) {
        this.addCapacity();
        for (let i = this.size; i >= 0; i--) {
            this.array[i] = i === 0 ? element : this.array[i - 1];
        }
        this.size++;
        return true;
    }

    pop() {
        if (this.size === 0) return undefined;
        const itemRemoved = this.array[this.size - 1];
        this.array[this.size - 1] = undefined;
        this.size--;
        return itemRemoved;
    }

    shift() {
        if (this.size === 0) return undefined; // If the list is empty
        const firstElement = this.array[0]; // Store the first element
        for (let i = 0; i < this.size - 1; i++) {
            this.array[i] = this.array[i + 1]; // Shift elements left
        }
        this.array[this.size - 1] = undefined; // Clear the last element
        this.size--; // Decrease the size
        return firstElement; // Return the removed first element
    }

    peekFirst() {
        if (this.size === 0) return null; // If the list is empty
        return this.array[0]; // Return the first element
    }

    peekLast() {
        if (this.size === 0) return null; // If the list is empty
        return this.array[this.size - 1]; // Return the last element
    }

    get(index) {
        if (index < 0 || index >= this.size) return undefined; // If index is out of bounds
        return this.array[index]; // Return the element at the specified index
    }

    indexOf(target) {
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] === target) return i; // Return the index if target is found
        }
        return -1; // Return -1 if the target is not found
    }
}

const list = new DynamicList(5);
list.push(1);
list.push(2);
list.push(3);
list.unshift(0);
console.log(list.shift()); // Output: 0
console.log(list.peekFirst()); // Output: 1
console.log(list.peekLast()); // Output: 3
console.log(list.get(1)); // Output: 2
console.log(list.indexOf(2)); // Output: 1
console.log(list.indexOf(10)); // Output: -1
list.print(); // Output: [ 1, 2, 3 ]

