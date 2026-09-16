// Linked List - Singly
function LinkedList() {
    this.head = null;
    this.size = 0;
}

function Node(val, next = null) {
    this.val = val;
    this.next = next;
}

LinkedList.prototype.print = function() {
    if (this.size === 0) return "Empty";
    let curr = this.head;
    for (let i=0; i<this.size; i++) {
        console.log(curr.val);
        curr = curr.next;
    }
}

LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for(let i=0; i<index; i++) {
        curr = curr.next;
    }
    return curr.val;
}

LinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

LinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (this.head == null) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
    // testing cyclic
    return newNode;
}

LinkedList.prototype.addAtIndex = function(index, val) {
    if (index<0 || index>this.size) return;
    if (index === 0) {
        this.addAtHead(val);
        return;
    } else if (index === this.size) {
        this.addAtTail(val);
    } else {
        let newNode = new Node(val);
        let curr = this.head;
        for(let i=0; i<index-1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }
    
}

LinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i=0; i<index-1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
}

// const list = new LinkedList();
// list.addAtHead(1);
// list.addAtTail(3);
// list.addAtIndex(1,2);
// console.log(list.get(1));
// list.deleteAtIndex(1);
// console.log(list.get(1));

// const list = new LinkedList();
// list.addAtHead(1);
// list.addAtTail(2);
// list.addAtTail(3);
// list.addAtTail(4);
// list.addAtTail(5);
// list.addAtTail(6);
// list.addAtTail(7);

// LinkedList.prototype.reverse = function() {
//     if (this.size < 2) return this;
//     let curr = this.head;
//     let prev = null;
//     while(curr) {
//         let temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//     }
//     this.head = prev;
//     return prev;
// };

// list.print();
// list.reverse();
// list.print();


// LinkedList.prototype.findMiddle = function() {
//     if (this.size === 0) return "Empty list";
//     if (this.size === 1) return this.head.val;

//     // Approach 1
//     // let middle = Math.floor(this.size/2);
//     // let curr = this.head;
//     // for(let i=0; i<middle; i++) {
//     //     curr = curr.next;
//     // }
//     // return curr.val;

//     // Approach 2 - Using 2 loops - slow fast
//     let slow = fast = this.head;
//     while(fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow.val;
// };
// console.log("Middle Element: ", list.findMiddle());


// const list = new LinkedList();
// list.addAtHead(1);
// let node2 = list.addAtTail(2);
// list.addAtTail(3);
// list.addAtTail(4);
// list.addAtTail(5);
// list.addAtTail(6);
// let node7 = list.addAtTail(7);
// node7.next = node2;

// LinkedList.prototype.hasCycle = function(head) {
//     let slow = fast = this.head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if (slow === fast) return true;
//     }
//     return false;
// }
// console.log("Is cyclic? ", list.hasCycle());


// Check if linked list is palindrome
// LinkedList.prototype.isPalindrome = function(head) {
//     // Approach 1
//     // let curr = this.head;
//     // let arr = [];
//     // while(curr.next) {
//     //     arr.push(curr.val);
//     // }
//     // for(let i=0; i<Math.floor(arr.length); i++) {
//     //     if (arr[i] !== arr[arr.length-1]) return false;
//     // }
//     // return true;


//     // Approach 2 (TOUGH) - find middle, reverse second
//     let slow = fast = this.head;
//     while(fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     // Middle el found, now reverse
//     let curr = slow;
//     let prev = null
//     while (curr) {
//         let temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//     }

//     // After reversal check if both are same
//     let firstList = this.head;
//     let secondList = prev;
//     while (secondList) {
//         if (firstList.val !== secondList.val) return false;
//         firstList = firstList.next;
//         secondList = secondList.next;
//     }
//     return true;
// }
// const list1 = new LinkedList();
// list1.addAtHead(1);
// list1.addAtTail(2);
// list1.addAtTail(3);
// list1.addAtTail(2);
// list1.addAtTail(1);
// console.log("Is palindrome? ", list1.isPalindrome());
// list1.addAtTail(5);
// console.log("Is palindrome still? ", list1.isPalindrome());
