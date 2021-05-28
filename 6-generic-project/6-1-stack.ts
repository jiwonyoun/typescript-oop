interface Stack<T> {
  readonly size: number;

  push(value: T): void;
  pop(): T;
}

// stack에 쌓일 하나의 객체 node
type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  constructor(private capacity: number) {}
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.capacity === this.size) {
      throw new Error("Stack is full");
    }
    const node = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (!this.head) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
stack.push(333);

while (stack.size !== 0) {
  console.log(stack.pop());
}

// stack.pop();
