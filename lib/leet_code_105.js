// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);
  let slicePoint = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, slicePoint + 1), inorder.slice(0, slicePoint))
  root.right = buildTree(preorder.slice(slicePoint + 1), inorder.slice(slicePoint + 1));
  return root;

}

ar1 = [3, 9, 8, 10, 20, 15, 7]
ar2 = [8, 9, 10, 3, 15, 20, 7]

console.log(buildTree(ar1, ar2));
