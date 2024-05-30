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
const givenArr = [1, 1];
arrToLinked(givenArr, l1);
l1.print();

var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummy = new Node(0);
  dummy.next = head;

  let prev = dummy;
  let current = head;
  while (current) {
    if (current.data === current.next.data) {
      while (current.next && current.data === current.next.data) {
        current = current.next;
      }
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
};
l1.head = deleteDuplicates(l1.head);

l1.print();

// 83. Remove Duplicates from Sorted List
// Solved
// Easy
// Topics
// Companies
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

const l2 = new LinkedList();
const ll = [1, 1, 2, 3, 4, 4, 5, 6, 6];
arrToLinked(ll, l2);
const removeDuplicate = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const dummyNode = new Node(0);
  dummyNode.next = head;
  let current = head;
  let prev = dummyNode;
  while (current && current.next) {
    if (current.data === current.next.data) {
      while (current.next && current.data === current.next.data) {
        current = current.next;
      }
      prev.next = current;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return dummyNode.next;
};
l2.head = removeDuplicate(l2.head);
l2.print();
