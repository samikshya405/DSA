// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

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
    return arr;
  }
}
const l1 = new LinkedList();

const arrToLinkedList = (arr, l1) => {
  arr.forEach((element) => {
    l1.addLast(element);
  });
};

let arr1 = [1, 2, 3, 4, 5];

arrToLinkedList(arr1, l1);
console.log(l1.print());
console.log(l1.head);

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  // let dummy = new Node(0);
  // dummy.next = head;
  // let prev = dummy;
  // let current = head;
  // while (current && current.next) {
  //   let first = current;
  //   let second = current.next;
  //   first.next = second.next;
  //   second.next = first;

  //   prev.next = second;
  //   prev = first;
  //   current = current.next;
  // }

  // return current;

  const dummy = new ListNode(0);
  dummy.next = head;
  let current = head;
  let prev = dummy;
  //   head = head.next

  while (current && current.next) {
    let first = current;
    let second = current.next;
    first.next = second.next;

    second.next = first;

    prev.next = second;

    prev = first;
    current = current.next;
  }
  if (current) {
    prev.next = current;
  }
  return dummy.next;
};
l1.head = swapPairs(l1.head);

console.log(l1.print());
