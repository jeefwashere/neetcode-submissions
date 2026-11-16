class Node {
    constructor(val, next = null) {
        this.next = next;
        this.value = val;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head;
        if (index >= this.size || index < 0) return -1;

       for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let current = this.head;
        if (index < 0 || index > this.size - 1) return false;
        // Remove head
        if (index === 0) {
            this.head = this.head.next;
            this.size--;

            if (this.size === 0) {
                this.tail = null;
            }

            return true;
        }

        if (index === this.size - 1) {
            for (let i = 0; i < this.size - 2; i++) {
                current = current.next
            }

            this.tail = current;
            this.tail.next = null;
            this.size--;

            return true;
        }

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let returnedNums = [];
        let current = this.head;

        while (current !== null) {
            returnedNums.push(current.value)
            current = current.next;
        }

        return returnedNums;
    }
}
