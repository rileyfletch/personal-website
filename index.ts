class PriorityQueue<T> {
    private heap: { priority: number; element: T }[] = [];
  
    enqueue(element: T, priority: number): void {
      this.heap.push({ element, priority });
      this.heapifyUp();
    }
  
    dequeue(): T | undefined {
      if (this.heap.length === 0) {
        return undefined;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop()?.element;
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop()!;
      this.heapifyDown();
      return root.element;
    }
  
    private heapifyUp(): void {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
          this.swap(currentIndex, parentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    private heapifyDown(): void {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let smallestChildIndex = currentIndex;
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex].priority < this.heap[smallestChildIndex].priority
        ) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex].priority < this.heap[smallestChildIndex].priority
        ) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (smallestChildIndex !== currentIndex) {
          this.swap(currentIndex, smallestChildIndex);
          currentIndex = smallestChildIndex;
        } else {
          break;
        }
      }
    }
  
    private swap(index1: number, index2: number): void {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  }
  
  // Example usage:
  const priorityQueue = new PriorityQueue<string>();
  
  priorityQueue.enqueue('Task 1', 3);
  priorityQueue.enqueue('Task 2', 1);
  priorityQueue.enqueue('Task 3', 2);
  
  console.log(priorityQueue.dequeue()); // Output: Task 2
  console.log(priorityQueue.dequeue()); // Output: Task 3
  console.log(priorityQueue.dequeue()); // Output: Task 1
  console.log(priorityQueue.dequeue()); // Output: undefined (empty queue)
  