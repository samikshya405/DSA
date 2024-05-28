/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }

    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return

        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    printList(){
        let current = this.head
        while(current){
            console.log(current.data)
            current= current.next
        }
    }


}

const a1 = new LinkedList()
a1.addLast(2)
a1.addLast(4)
a1.addLast(3)
console.log("list1");
a1.printList()

const a2 = new LinkedList()
a2.addLast(5)
a2.addLast(6)
a2.addLast(4)

console.log("list2");
a2.printList()


 var addTwoNumbers = function(l1,l2){
    let dummy = new Node(0)
    let current = dummy
    let carry = 0
    while(l1!==null || l2!==null || carry>0){
        let val1 = l1!==null ? l1.data : 0
        let val2 = l2!==null ? l2.data : 0
         let sum = val1 + val2 + carry

         carry = Math.floor(sum/10)
         sum = sum%10

         current.next =new Node(sum)
         current = current.next

         if(l1) l1 = l1.next
         if(l2) l2 = l2.next


    }
    return dummy.next
 }
 const resultLinkedList = new LinkedList();
resultLinkedList.head = addTwoNumbers(a1.head, a2.head);
console.log("result");
resultLinkedList.printList();