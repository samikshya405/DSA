// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

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

let ar = [1, 2, 3, 4];
// let arr2 = [1, 3, 4];
const l1 = new LinkedList();
// const l2 = new LinkedList();
arrToLinked(ar, l1);
// arrToLinked(arr2, l2);
l1.print();
// l2.print();

const reverseK = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let size = 0;
  let curr = head;
  while (curr) {
    size++;
    curr = curr.next;
  }

  const dummy = new Node(0);
  dummy.next = head;
  let prevGroupEnd = dummy;
  let currentGroupHead = head;
  for (let i = 0; i < Math.floor(size / k); i++) {
    let count = 0;
    let prev = prevGroupEnd;
    while (count < k && currentGroupHead) {
      let nextNode = currentGroupHead.next;
      currentGroupHead.next = prevGroupEnd;
      prevGroupEnd = currentGroupHead;
      currentGroupHead = nextNode;
      count++;
    }
    // currentGroupHead=currentGroupHead.next
    if (i === 0) {
      head = prevGroupEnd;
    }
    prevGroupEnd.next = currentGroupHead;
  }

  return head;
};

l1.head = reverseK(l1.head, 2);
l1.print();
