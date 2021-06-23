var frequencySort = function (nums) {
  // arr of integer : nums =
  // sort the array in increasing order, based on freq of val
  // if multiple vall have the same freq, sort them in decreasing order
  /* 6:05pm
        1. count the freq of numbers
        2. sort arr from decreasin order if freq is equivalent
        
        //example 2:
        //bucket sort
        //nums = [2,3,1,3,2]
        //[[],[1],[3,2]]
        
        // first for loop
        // keeping track of the freq where index number is the val in nums, and val represent the freq of the number
        arr[<value>] = 
        if value exist arr[<val>] += 1
        else arr[<val>] = 1
        *** also going to keep record of the highest val that we have in our arr
        
        // second for loop, we're going to start from the freq of 1
        // append all val of freq of 1 into our result arr, and incre freq and continue process for proceding indices
        // in this for loop, i can go thru our orginal nums arr and check if arr[<val>] is equal to freq
        // incre freq for next iteration
        // arr[2] == 1 ? append to result array, incre freq(freq is now 2), arr[i] ?= 2
        
    */
  const arr = [];
  let maxFrq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]] == null) {
      // arr[3] == null, condition passed
      arr[nums[i]] = 1;
      // arr[3] = 1, move on to next iteration
    } else {
      arr[nums[i]] += 1;
      // arr[3] = 2
    }
    if (arr[nums[i]] > maxFrq) maxFrq = arr[nums[i]];
  }
  // [1,1,2,2,2,3]
  // [0,1,2,3] --> freq = [0,2,3,1]
  nums = nums.sort((a, b) => b - a);

  const result = [];
  let index = 0;
  for (let freq = 1; freq <= maxFrq; freq++) {
    for (let i = 0; i < nums.length; i++) {
      // [2,3,1,3,2]
      // index 0, arr[2] == 1, this is true, push to result array
      if (arr[nums[i]] == freq) {
        result[index++] = nums[i];
      }
    }
  }
  return result;
  // brute force --> horrible approach with O(maxFreq * N) time complexity and O(2N) space complexity
};
