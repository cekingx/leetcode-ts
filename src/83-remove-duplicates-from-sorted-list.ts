/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | undefined

  constructor(val?: number, next?: ListNode) {
    this.val = (val == undefined ? 0 : val)
    this.next = (next == undefined ? undefined : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let current: ListNode | undefined = head; 
  let next: ListNode | undefined = undefined;
  let value: number[] = []
  value.push(current.val)

  while (current != undefined) {
    next = current.next;
    if (next == undefined) {
      break;
    }

    if (current.val != next.val) {
      value.push(next.val)
    }
    current = next
  }

  let newHead: ListNode | undefined;
  for (let i = value.length - 1; i >= 0; i--) {
    newHead = new ListNode(value[i], newHead)
  }

  if (!newHead) {
    return null
  }

  return newHead
};

export { ListNode, deleteDuplicates }