class MyNode {
    MyNode(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(arr, start, end) {
    if(start >= end ) {
        return;
    }

    let mid = Math.round((start + end) / 2);

    let node = new MyNode(arr[mid]);

    node.data = arr[mid];

    node.left = sortedArrayToBST(arr, start, mid - 1);

    node.right = sortedArrayToBST(arr, mid + 1, end);

    return node;

}

function preOrder(node) {
    if(!node) {
        return
    }

    console.log(`${node.data} `);
    preOrder(node.left);
    preOrder(node.right);
}


let arr = [0,1,2,3,4,5,6,7,8,9];

let root = sortedArrayToBST(arr, 0, arr.length -1);
console.log('Print');
preOrder(root);