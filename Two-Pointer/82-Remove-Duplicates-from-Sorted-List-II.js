/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // create the dummy
    const dummy = {next: head};
    // predecessor = the last node 
    // before the sublist of duplicates
    let pred = dummy;

    while (head && head.next) {
        // if it's a beginning of duplicates sublist 
        // skip all duplicates
        if (head.next.val === head.val) {
            // move till the end of duplicates sublist
            while (head.next && head.next.val === head.val) {
                head = head.next;
            }
            // skip all duplicates
            pred.next = head.next;
        }
        // otherwise, move predecessor
        else pred = pred.next;
        // move forward
        head = head.next;
    } 
    return dummy.next;
};
// Time Complexity: O(N)
// Space Complexity: O(1)
