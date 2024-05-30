/* Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 
Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
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

var reverseKGroup = function (head, k) {
  function getLength(head) {
    let current = head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }
  const length = getLength(head);
  const dummy = new Node(0); // Dummy node to simplify the logic
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < Math.floor(length / k); i++) {
    let currentGroupHead = prev.next;
    let current = currentGroupHead;
    for (let j = 1; j < k; j++) {
      let nextNode = current.next;
      current.next = nextNode.next;
      nextNode.next = currentGroupHead;
      currentGroupHead = nextNode;
    }
    prev.next = currentGroupHead;
    prev = current;
  }
  return dummy.next;
};
const l2 = new LinkedList();
l2.head = reverseKGroup(l1.head, 3);
l2.print();
