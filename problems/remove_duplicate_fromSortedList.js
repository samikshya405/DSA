/* 
82. Remove Duplicates from Sorted List II
Medium
Topics
Companies
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
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
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const arrToLinked = (arr, list) => {
  arr.forEach((item) => list.addLast(item));
};

const l1 = new LinkedList();
const givenArr = [1, 1, 2, 3, 3, 4, 4, 5];
arrToLinked(givenArr, l1);
l1.print();
const l2 = new LinkedList();

var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummy = new Node(0);
  dummy.next = head;
  let current = dummy;

  while (current.next && current.next.next) {
    if (current.next.data === current.next.next.data) {
      let duplicateValue = current.next.data;
      while (current.next && current.next.data === duplicateValue) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};
l2.head = deleteDuplicates(l1.head);
l2.print();
