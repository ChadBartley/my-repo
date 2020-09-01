class Graph {
    constructor(v) {
        this.V = v;
        this.adj = [];
        for(let i = 0; i < v; ++i) {
            this.adj.push(new LinkedList());
        }
    }

    addEdge(v,w) {
        this.adj[v].add(w);
    }

    BFS(s) {
        let visited = new Array(this.V);

        let queue = new LinkedList();

        visited[s] = true;

        queue.push(s);

        while(queue.length !== 0) {
            
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);

        let current;

        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }
}