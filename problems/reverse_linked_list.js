// Definition of ListNode
class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

// Definition of LinkedList
class LinkedList {
    constructor() {
        this.head = null;
    }

    addLast(data) {
        const newNode = new ListNode(data);
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
}

// Function to reverse the linked list
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current != null) {
        const nextNode = current.next; // Store the next node
        current.next = prev;           // Reverse the current node's pointer
        prev = current;                // Move the prev pointer one step forward
        current = nextNode;            // Move the current pointer one step forward
    }
    return prev; // prev will be the new head of the reversed list
};

// Helper function to print the list
function printList(head) {
    let current = head;
    const result = [];
    while (current != null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Creating the linked list
const l1 = new LinkedList();
l1.addLast(1);
l1.addLast(2);
l1.addLast(3);

// Reversing the linked list
const reversedHead = reverseList(l1.head);
console.log(l1);

// Printing the reversed list
printList(reversedHead); // Output should be: 3 -> 2 -> 1
