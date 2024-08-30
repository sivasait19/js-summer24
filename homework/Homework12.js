// Define the ListNode class
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // Function to reverse the linked list
  function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
      let next = current.next;
      current.next = prev;     
      prev = current;          
      current = next;          
    }
    return prev; 
  }
  
  // Function to print the linked list
  function printList(head) {
    let current = head;
    const result = [];
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result); 
  }
  
  const n5 = new ListNode(5, null);
  const n4 = new ListNode(4, n5);
  const n3 = new ListNode(3, n4);
  const n2 = new ListNode(2, n3);
  const head = new ListNode(1, n2);
  
  printList(reverseList(head)); 
  
