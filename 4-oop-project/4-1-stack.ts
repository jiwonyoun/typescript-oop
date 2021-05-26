interface Stack {
  readonly size: number;

  push(value: string): void;
  pop(): void;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  constructor(private capacity: number) {}
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this.capacity === this.size) {
      throw new Error("Stack is full");
    }
    const node: StackNode = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

while (stack.size !== 0) {
  console.log(stack.pop());
}

// stack.pop();
