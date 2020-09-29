
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function create(arr) {
     
    let node = new ListNode(arr[0], null);
    
    let first = node;
    
    let i = 1;
    
    while(i < arr.length) {
        let next = new ListNode(arr[i], null);
        
        node.next = next;
        
        node = next;
        
        i += 1;
    }
    
    return first;
 }

 function print(head) {

    let node = head;

    while(node) {
        console.log(`${node.val} -> `);
        node = node.next;
    }
 }

 function print(head) {

    let node = head;

    while(node) {
        console.log(`${node.val} -> `);
        node = node.next;
    }
 }

var removeNthFromEnd = function(head, n) {
    
    let root = head;

    let node = head;

    let sprinter = node;

    for(let i = 0; i < n; i++) {
        sprinter = sprinter.next;
    }

    if(!sprinter) {
        return node.next;
    }

    while(sprinter) {

        if(!sprinter.next) {
            node.next = node.next.next;
        }

        node = node.next;
        sprinter = sprinter.next;
    }

    return root;
    
};

let test = [1,2,3,4,5];
let test_1 = [1,2,3];

let first = create(test);
let second = create(test_1);

print(removeNthFromEnd(second, 3));

// print(removeNthFromEnd(first, 2));
