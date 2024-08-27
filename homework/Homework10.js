class Node {
    val; // data to store in each node
    next; // a pointer referencing the next Node

    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    sentinel; 
    size;

    constructor() {
        this.sentinel = new Node(); // create sentinel node
        this.size = 0;
    }

    addFirst(val) {
        const newNode = new Node(val, this.sentinel.next);
        this.sentinel.next = newNode;
        this.size++;
        return true;
    }

    removeFirst() {
        if (this.size === 0) return undefined;
        const removedNode = this.sentinel.next;
        this.sentinel.next = removedNode.next;
        this.size--;
        return removedNode.val;
    }

    add(index, val) {
        if (index < 0 || index > this.size) return false;

        let curr = this.sentinel;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        const newNode = new Node(val, curr.next);
        curr.next = newNode;
        this.size++;
        return true;
    }

    contains(val) {
        let curr = this.getHead();
        while (curr !== null) {
            if (curr.val === val) return true;
            curr = curr.next;
        }
        return false;
    }

    get(index) {
        if (index < 0 || index >= this.size) return undefined;

        let curr = this.getHead();
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    indexOf(val) {
        let curr = this.getHead();
        let index = 0;
        while (curr !== null) {
            if (curr.val === val) return index;
            curr = curr.next;
            index++;
        }
        return -1;
    }

    peekFirst() {
        if (this.size === 0) return null;
        return this.getHead().val;
    }

    peekLast() {
        if (this.size === 0) return null;

        let curr = this.getHead();
        while (curr.next !== null) {
            curr = curr.next;
        }
        return curr.val;
    }

    getHead() {
        return this.sentinel.next;
    }

    print() {
        if (this.size === 0) {
            console.log("{ }", this.size);
            return;
        }

        let list = "{ ";
        let curr = this.getHead();
        while (curr !== null) {
            list += curr.val + " -> ";
            curr = curr.next;
        }
        list = list + "null }";
        console.log(list, this.size);
    }
}


list.addFirst(1);  // { 1 -> null }
list.addFirst(2);  // { 2 -> 1 -> null }
list.add(1, 3);    // { 2 -> 3 -> 1 -> null }
list.print();
console.log(list.contains(3));  // true
console.log(list.get(2));       // 1
console.log(list.indexOf(1));   // 2
console.log(list.peekFirst());  // 2
console.log(list.peekLast());   // 1
list.removeFirst();             // Removes 2
list.print();                   // { 3 -> 1 -> null }
