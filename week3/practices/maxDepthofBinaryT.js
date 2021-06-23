var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  // recursion on our left branch
  // from 3 to 9, we are going to return( 1 + <another recursion>)
  //                                     ( 1 + 0)
  //      9 to null, since condition on line 14 is true we receive 0

  // MAIN: RETURN 1 + MATH.MAX(1, <lets look at right side>)
  // 3 pointing to 20, we are going to return ( 1 + <another recursion>)
  //                                          ( 1 + 2) == 3
  //              Above operation named <another recursion> happens below
  //              since condition not met this time the recursion
  //                      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  //                      return 1 + Math.max(maxDepth(15), maxDepth(7)); // left is 15 right is 7
  //                      return 1 + Math.max(1,1)
  //                      return 1 + 1 == value of 2

  //     if(root.right == null && root.right == null ){
  //         return count
  //     }else if(root.right!== null){
  //         count = traverse(root.left)
  //         count++
  //     }else{
  //         count = traverse(root.right)
  //         count++
  //     }
  // }

  // var maxDepth = function(root) {
  //     // maybe use recursion and keep track of depth, everytime a
  //     // root.right != null|| root.left != null we make root = root.right
  //     // given root = 3
  //     let right = traverse(root.right, 1)
  //     let left = traverse(root.left, 1)
  //     return(right > left ? right: left)
};
