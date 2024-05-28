/* 
Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/

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
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const l1 = new LinkedList();

const arrToLinked = (arr, list) => {
  arr.forEach((item) => list.addlast(item));
};
let arr1 = [1, 2, 3, 4, 5, 6, 8, 9];
arrToLinked(arr1, l1);

l1.print();

var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Compute the effective rotations needed
  k = k % length;
  if (k === 0) return head;
  let h = head;
  let current;
  for (let i = 0; i < k; i++) {
    let prev = null;

    current = head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    current.next = h;
    head = current;
    h = current;
  }
  return current;
};

const l2 = new LinkedList();
l2.head = rotateRight(l1.head, 2000000000);
l2.print();
