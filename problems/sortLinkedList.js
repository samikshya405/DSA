// sort llinked list

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
    let newNode = new Node(data);
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

const arrToLinkedList = (arr, list) => {
  arr.forEach((item) => list.addlast(item));
};

let a1 = [7, 6, 5, 4];
const l1 = new LinkedList();

arrToLinkedList(a1, l1);
l1.print();

const sortList = function (head) {
  if (!head) {
    return head;
  }
  let size = 0;
  let curr = head;
  while (curr) {
    size++;
    curr = curr.next;
  }
  let dummy = new Node(0);
  dummy.next = head;
  let prev = dummy;

  return dummy.next;
};

l1.head = sortList(l1.head);
l1.print();
