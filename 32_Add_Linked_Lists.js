
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    let a = '';

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;     
 };
 
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


let test = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let other = [5,6,4];

let firstNode = create(test);
let secondNode = create(other);

print(addTwoNumbers(firstNode, secondNode));

//print(addTwoNumbers(create([2,4,3]), create([5,6,4])))