import { SinglyNode } from "../node/linked-list";
export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new SinglyNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size += 1;
  }

  delete(data) {
    if (!this.head) {
      throw new Error("empty list");
    }

    if (data === this.head.data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next || null;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    // let prevNode = null;
    // let nextNode = null;
    // while (currentNode.next) {
    //   prevNode = currentNode;
    //   nextNode = currentNode.next;
    //   if (currentNode.data === data) {
    //     prevNode.next = nextNode;
    //     break;
    //   }
    // }
    // this.size -= 1;
  }

  update() {}

  get() {
    return this.head;
  }
}
