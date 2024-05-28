//  Remove Nth Node From End of List
// Medium
// Topics
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  addLast(data) {
    const newNode = new Node(data);
    let current = this.head;
    if (!this.head) {
      this.head = newNode;
      return;
    }

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printlist() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  removeNthNode(n) {
    let fast = this.head
    let slow = this.head
    for(let i=0;i<n;i++){
        fast = fast.next
    }

    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return this.head

  }
}

const l1 = new LinkedList();
l1.addLast(2);
l1.addLast(4);
l1.addLast(6)
l1.removeNthNode(1)
l1.printlist();
