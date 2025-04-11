import { describe, it, assert } from 'vitest';
import { deleteDuplicates, ListNode } from '../src/83-remove-duplicates-from-sorted-list';

describe('83-remove-duplicates-from-sorted-list', () => {
  it("should remove duplicate", () => {
    const list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2))))
    const result = deleteDuplicates(list)
    console.log('result', result)
  })
})