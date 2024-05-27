// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let string1 = "";
    let string2 = "";

    let node = head;
    while (node != null) {
        string1 += node.val;
        string2 = node.val + string2;
        node = node.next;
    }
    
    return string1 === string2;
    
};

isPalindrome([1,2,2,1])
