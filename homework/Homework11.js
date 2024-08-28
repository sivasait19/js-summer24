//removeFirst - O(1)

removeFirst() {
    if (this.size === 0) return null; // List is empty, nothing to remove

    const firstNode = this.getHead(); // Get the first node
    const newFirst = firstNode.next; // Get the node after the first

    if (newFirst !== null) {
        newFirst.prev = this.sentinel; // Update the new first node's prev pointer
    }

    this.sentinel.next = newFirst; // Update the sentinel's next pointer
    this.size--; // Decrease the size of the list

    if (this.size === 0) {
        this.last = this.sentinel; // If the list is now empty, update last pointer
    }

    return firstNode.data; // Return the data of the removed node
}

//add(index, val) - O(n)

add(index, val) {
    if (index < 0 || index > this.size) return false; 

    if (index === 0) {
        this.addFirst(val); 
        return true;
    } else if (index === this.size) {
        this.addLast(val); 
        return true;
    }

    let current = this.getHead();
    for (let i = 0; i < index - 1; i++) {
        current = current.next; 
    }

    const newNode = new Node(val, current, current.next); 
    current.next.prev = newNode; 
    current.next = newNode; 

    this.size++;
    return true;
}

//removeIndex - O(n)

remove(index) {
    if (index < 0 || index >= this.size) return null; 

    if (index === 0) return this.removeFirst(); 
    if (index === this.size - 1) return this.removeLast(); 

    let current = this.getHead();
    for (let i = 0; i < index; i++) {
        current = current.next; 
    }

    current.prev.next = current.next; 
    current.next.prev = current.prev; 

    this.size--;
    return current.data; 
}

//peekFirst - O(1)

peekFirst() {
    if (this.size === 0) return null; 
    return this.getHead().data; 
}


//peekLast - O(1)

peekLast() {
    if (this.size === 0) return null; 
    return this.last.data; 
}

