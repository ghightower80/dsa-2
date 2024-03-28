/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(node = this.root) {
    // If the current node is null, return 0.
    if (node === null) {
      return 0;
    }

    let sum = node.val; // Initialize the sum with the current node's value.

    // Iterate over the children of the current node and recursively calculate the sum.
    for (const child of node.children) {
      sum += this.sumValues(child);
    }

    return sum; // Return the sum of values.
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(node = this.root) {
    // If the current node is null, return 0.
    if (node === null) {
      return 0;
    }

    let count = node.val % 2 === 0 ? 1 : 0; // Initialize count with 1 if the current node is even, otherwise 0.

    // Iterate over the children of the current node and recursively count the even values.
    for (const child of node.children) {
      count += this.countEvens(child);
    }

    return count; // Return the count of even values.
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, node = this.root) {
    // If the current node is null, return 0.
    if (node === null) {
      return 0;
    }

    let count = node.val > lowerBound ? 1 : 0; // Initialize count with 1 if the current node's value is greater than the lower bound, otherwise 0.

    // Iterate over the children of the current node and recursively count the nodes with values greater than the lower bound.
    for (const child of node.children) {
      count += this.numGreater(lowerBound, child);
    }

    return count; // Return the count of nodes with values greater than the lower bound.
  }
}


module.exports = { Tree, TreeNode };
