/*
    Given an array of integers nums, sorted in ascending order, and an integer target, 
    write a function to search target in nums. If target exists, then return its index. Otherwise return -1

    using binary search to search number achieving an O(logn) complexity

    nums = [-1,0,3,5,9,12]
    target = 9
*/
var binarySearch = function (nums, target, start, end) {
    if (start >= end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
        return binarySearch(nums, target, start, mid);
    }
    return binarySearch(nums, target, mid + 1, end);
};

var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length);
};
