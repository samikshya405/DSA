/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
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

  //add data to last of linked list
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

// converting array to linked list
const arrToLinked = (arr, list) => {
  arr.forEach((item) => list.addLast(item));
};

//creating a linked list

const l1 = new LinkedList();
const l2 = new LinkedList();
let arr = [1, 2, 4];
let arr2 = [1, 3, 4];
arrToLinked(arr, l1);
arrToLinked(arr2, l2);

const l3 = new LinkedList();

var mergeTwoLists = function (list1, list2) {
  let dummy = new Node(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.data <= list2.data) {
      current.next = list1;
    
      list1 = list1.next;
    } else {
      current.next = list2;
    
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) {
    current.next = list1;
  } else if (list2) {
    current.next = list2;
  }

  return dummy.next;
};

l3.head =mergeTwoLists(l1.head, l2.head);
console.log("hey");
console.log(l3.print());
