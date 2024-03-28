/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth(node = this.root) {
    // If the node is null, return 0 because there's no path.
    if (node === null) {
      return 0;
    }

    // If the node is a leaf node, return 1.
    if (node.left === null && node.right === null) {
      return 1;
    }

    // If the left child is null, explore only the right subtree.
    if (node.left === null) {
      return this.minDepth(node.right) + 1;
    }

    // If the right child is null, explore only the left subtree.
    if (node.right === null) {
      return this.minDepth(node.left) + 1;
    }

    // Otherwise, explore both left and right subtrees and return the minimum depth.
    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    // If the node is null, return 0 because there's no path.
    if (node === null) {
      return 0;
    }

    // If the node is a leaf node, return 1.
    if (node.left === null && node.right === null) {
      return 1;
    }

    // Recursively calculate the maximum depth of left and right subtrees.
    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);

    // Return the maximum depth of left and right subtrees plus 1 (to account for the current node).
    return Math.max(leftDepth, rightDepth) + 1;
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // Helper function to calculate the maximum sum starting from a given node
    const maxSumFromNode = (node) => {
      // If the node is null, return 0.
      if (node === null) {
        return 0;
      }

      // Calculate the maximum sum of paths starting from the left and right children.
      const leftSum = Math.max(0, maxSumFromNode(node.left));
      const rightSum = Math.max(0, maxSumFromNode(node.right));

      // Update the maximum sum encountered so far.
      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);

      // Return the maximum sum of paths starting from this node.
      return node.val + Math.max(leftSum, rightSum);
    };

    let maxSum = 0; // Initialize the maximum sum to 0.
    maxSumFromNode(this.root); // Start calculating the maximum sum from the root node.
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLargerValue = null; // Initialize the variable to store the next larger value
    let currentNode = this.root; // Start traversal from the root

    // Traverse the tree
    while (currentNode) {
      // If current node's value is greater than the lower bound
      if (currentNode.val > lowerBound) {
        // Update the next larger value
        nextLargerValue = currentNode.val;
        // Move to the left subtree to explore smaller values
        currentNode = currentNode.left;
      } else {
        // Move to the right subtree to find larger values
        currentNode = currentNode.right;
      }
    }

    return nextLargerValue; // Return the next larger value found
  }


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
