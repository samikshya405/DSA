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
const givenArr = [1, 2, 2];
arrToLinked(givenArr, l1);
l1.print();
const l2 = new LinkedList();
// const removeNode = function (head, n) {
//   if (!head) {
//     return head;
//   }
//   if (head.data === n) {
//     head = head.next;
//     return head;
//   }
//   let current = head;
//   let prev = null;
//   while (current && current.next) {
//     prev = current;
//     current = current.next;
//     if (current.data === n) {
//       prev.next = current.next;
//     }
//   }
//   return head;
// };
// const l2 = new LinkedList();
// l2.head = removeNode(l1.head, 4);

var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let prev = null;
  let current = head;
  while (current) {
    if (current.next && current.data === current.next.data) {
      while (current.next && current.data === current.next.data) {
        current = current.next;
      }
      if (!prev) {
        return null;
      }

      prev.next = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
l2.head = deleteDuplicates(l1.head);
l2.print();
