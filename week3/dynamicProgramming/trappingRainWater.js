/*
    Given n non negative integers representing an elevation map where the width of each bar is 1
    compute how much water it can trap after raining

    Initial Idea:
    
    Having two pointer and 
*/

// var trap = function(height) {
//     let left = 0, right = 1, volumn = 0, currentBlack =0;
    
//     while(left < height.length && right < height.length){
//         if(left - 1 !== right && height[left] <= height[right]){
//             volumn+= (right-left-1)* Math.min(height[left],height[right])
//             volumn-=currentBlack
//             left = right
//             currentBlack = 0
            
//         }else if(left - 1 !== right && height[left] > height[right]){
//             currentBlack+= height[right]
//         }else{
//             left++
//         }
//         right++
        
//     }
//     return volumn
// };
// the above approach doesnt work because we are only accounting for the right triangle and expanding width only if there is a higher bar
var trap = function(height) {
    // condition, if current level is less than prev, that mean we can fill it with water
    //  once current level is greater than or equal to maxBar, then we will set marBar to current level
    //  maxBar is our upper limit, and we can to approach the elevation map from left and right side
    //  so that we'll be able to measure the max elevated level that will allow us to trap water

    // we'll be measuring possible volumn for each vertical bar

    // edge = if height is less than 3 then return 0
    //  since no space to trap water
    if(height.length < 3) return 0

    let left = leftMax = rightMax = volumn = 0
    let right = height.length

    while(left<right){
        if(height[left] <= height[right]){
            height[left] <= leftMax? leftMax = height[left]: volumn += leftMax - height[left] 
            left++
        }else{
            height[right] <= rightMax? rightMax = height[right]: volumn += rightMax - height[right] 
            right--
        }
    }
    return volumn

    /* Brute Force
        if(height.length < 3) return 0

        let sum = 0
        
        for(let mid = 0; mid < height.length; mid++){
            let leftMax = rightMax=0
            for(let left = mid; left>= 0; left--){
                leftMax = Math.max(leftMax,height[left])
            }
            for(let right = mid; right < height.length; right++){
                rightMax = Math.max(rightMax, height[right])
            }
            sum += Math.min(leftMax,rightMax)-height[mid]
        }
        return sum
    */
};