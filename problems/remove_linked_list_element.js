// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = null;
  }

  addlast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const arrToLinked = (arr, list) => {
  arr.forEach((item) => list.addlast(item));
};

let ar = [2, 3, 4, 2, 5];
const l1 = new LinkedList();
arrToLinked(ar, l1);
l1.print();

const removeNode = function (head, node) {
  if (!head) {
    return;
  }
  const dummy = new Node(0);
  dummy.next = head;
  let prev = dummy;
  let current = head;
  while (current) {
    if (current.data === node) {
      prev.next = current.next;
    } else {
      prev.next = current;
      prev = current;
    }
    current = current.next;
  }
  return dummy.next;
};

l1.head = removeNode(l1.head, 5);
l1.print();
