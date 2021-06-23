/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
    idea: 
        iterate through list once to find total nodes
        
    update totalCount to tatalCount - n
    iterate through the list again and decre totalCount everytime
        once (totalCount is zero)
            we'll make ptr points to two node ahead
                or null if two node ahead DNE
    return head

    instead of the approach above, another way to approach this is by fast and slow pointer
    so given the head of list, and n 
    
    fastptr and slowptr that points to the head of the list
        so what we're going to do is moving fastptr by n times
    
    iterate through the list moving slow pointer from the head forward along with fast pointer at the same pace
        once fast pointer reaches null, thats when the slow pointer is n node away from end of our list
    
    since we're removing a node, we need a temp ptr that points to the items that we would like to remove
    assign the node after slowpointer as temporary
    make slow pointer points to the node after temporary
    delete the node that our temp is pointing to 

    return result

    edge cases = when total number of node is equal to n, 
        in this case, we will just remove remove the first node

*/

 var removeNthFromEnd = function(head, n) {
    let fast = head,
        slow = head,
        temp;

    while(n!=0){
        fast = fast.next;
        n -= 1;
    }

    if(!fast){
        temp = head.next;
        delete(temp)
        return temp
    }

    while(fast.next!==null){
        fast = fast.next;
        slow = slow.next;
    }

    // once our fast pointer reaches the end, we know that our slowptr is n node from the end of list
    temp = slow.next
    slow.next = temp.next
    delete(temp)
    return head
};

/*
var removeNthFromEnd = function(head, n) {
    let fast = head,
        slow = head,
        temp;
    
	// move fast pointer to the right n times, so that slow and fast pointer are at n distance from one another
    while(n--) {
        fast = fast.next;
    }
    // in case, n equals length of list and first node is to be removed
    if(!fast) {
        temp = head.next;
        delete(temp);
        return temp;
    }
    
	// move slow and fast pointer until fast reaches the last node
	// then the slow pointer will be pointing to the node that is (n + 1)th from the end
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
	
	// remove the nth node by updating the next pointer and deleting the removed node
    temp = slow.next;
    slow.next = temp.next;    
    delete(temp);
    return head;
};
*/