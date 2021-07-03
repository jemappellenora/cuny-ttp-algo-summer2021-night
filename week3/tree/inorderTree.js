/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
   /*
   psuedoCode:

   data structure: stack, curr where curr = curr Node
   whiel stack is not empty o curr is not null
        if curr is not-null
            stack.append
            point current node to left child
        else: curr node is null
            node = stack.pop()
            tree.append(node.val)
            point curr to node.right
   */
  let stack = [],
    tree = []
    curr = root

    while( stack || curr){
        if( curr){
            stack.append( curr)
            curr = curr.left
        }
        else{
            curr = stack.pop()
            tree.append(curr.val)
            curr = curr.right ///??
        }
    }
  return tree
};

console.log()