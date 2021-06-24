/*
    given an array nums of n integer where nums[i] is from range of 1 to n,
    return an array of all the intergers in the range[1,n] that do not appear in nums

    first removes all duplicates by putting them into a set
        which can be used later on when we iterate from 1 to n 
        if number is not found in our set, we'll push number into result array
*/
var findDisappearedNumbers = function(nums) {
    let resultSz = 0
    let set = new Set()
    for(const num of nums){
        if(!set.has(num)) set.add(num)
    }
    let size = nums.length
    for(let i = 1; i<=size; i++){
        if(!set.has(i)){
            nums[resultSz++] = i
        }
    }
    return nums.slice(0, resultSz)
};