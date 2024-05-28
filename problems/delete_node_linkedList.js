/*There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order. */


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
    print(){
        let current = this.head
        while(current){
          console.log(current.data);
          current = current.next
        }
      }

      deleteN(node){
        if(!this.head){
            return
        }
        if(this.head.data = node){
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null
        while(current && current.data!=node){
            prev = current
            current = current.next
        }
        prev.next = current.next
      }
}

const l1 = new LinkedList()
l1.addLast(1)
l1.addLast(2)
l1.addLast(4)
l1.addLast(5)
l1.deleteN(2)



l1.print()