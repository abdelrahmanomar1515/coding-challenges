class MaxBinaryHeap {
  values: number[] = [];

  insert(value: number) {
    this.values.push(value);
    this.bubbleUp();
  }

  getMax(): number {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();
    return max;
  }

  peek() {
    return this.values[0];
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = this.getParentIndex(idx);
      const parent = this.values[parentIdx];
      if (element <= parent) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  private sinkDown() {}

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  private getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }
  private getRightChildIndex(index: number) {
    return 2 * index + 2;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(33);
heap.insert(55);
heap.insert(39);
heap.insert(18);
heap.insert(12);
heap.insert(41);
heap.insert(27);
console.log(heap);
