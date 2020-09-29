// Recursion
function invertTreeRecursive(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
  }
  
  // DFS
  function invertTreeDFS(root) {
    const stack = [root];
  
    while (stack.length) {
      const n = stack.pop();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        stack.push(n.left, n.right);
      }
    }
  
    return root;
  }
  
  // BFS
  function invertTreeBFS(root) {
    const queue = [root];
  
    while (queue.length) {
      const n = queue.shift();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        queue.push(n.left, n.right);
      }
    }
  
    return root;
  }