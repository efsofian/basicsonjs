const createQueue = require('./queue');

function createPriorityQueue () {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }
      return lowPriorityQueue.dequeue()
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek()
      }
      return lowPriorityQueue.peek()
    },
    length() {
      return highPriority.length + lowPriority.length
    },
    isEmpty() {
      return (highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty());
    },
  }
}


const q = createPriorityQueue();

q.enqueue('a fix here');
q.enqueue('a bug there');
q.enqueue('a New Feature');

q.dequeue();
q.enqueue('emergency task', true);
q.dequeue();
console.log(q.peek());

exports.createPriorityQueue = createPriorityQueue;
