function inOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the root value
  //   concatenated with the right array

  if (!root) return [];

  let leftArr = inOrderArray(root.left);
  let rightArr = inOrderArray(root.right);
  return [...leftArr, root.val, ...rightArr];
}

function postOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];
  let leftArr = postOrderArray(root.left);
  let rightArr = postOrderArray(root.right);

  return [...leftArr, ...rightArr, root.val];
  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
}


module.exports = {
  inOrderArray,
  postOrderArray
};
