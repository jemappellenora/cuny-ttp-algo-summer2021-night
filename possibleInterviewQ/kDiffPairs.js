/*
    Given an array of Integers nums and an integer k
    return the number of unique k-diff pairs in the array

    example: 
        nums = [3,1,4,1,5], k = 2

        create var result count
        // we want to return 2 unique pairs
        k is 2, and there are two 2-dff paris in the array, (1,3),(3,5)

        so k is the different between two number, 
        and we want to find the number of pair that contains the k diff

        iterate through nums array and put the freq of number into a map

        numFrq[<number>] = frequency
        use a variable to keep track of max val in array

        starting from minNumber that we have,
            we'll check if there is a key of number+k in our map
            if such number exist, we'll increment our resultCount
            after incrementing, we'll deduct one from the frequency count of our number(key)
                in case that freq is 1, we'll remove the key from the map
                delete freq[number]

*/

const kDiffPairs = function( nums, k){
    const map = new Map();
    
    for (const num of nums) {
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }
    
    let pairs = 0;
    
    // to avoid counting duplicates, we'll just go through all key pair in our map
    for (const [num, count] of map) {
        const target = num - k;
        
        if (k===0) {
            if (count > 1) pairs++;
        } else {
            if (map.has(target)) pairs++;
        }
    }
    
    return pairs;
    /* two pointer
        sort the array
        create pointer at index 0 and 1

        loop through array, while left and right is less than nums.length

        if left and right is pointing at the same element
            or nums[right] - nums[left] < k
            then, we just increment right pointer

        else if the difference is greater than k
            we want increase left side so that difference is smaller
            since we need a bigger number to create a smaller difference
        
        else, means that if difference is not greater or less than k
            therefore equals to k
            then we increment our result count 
            then we move our left count, moves our loop forward
                while(left ptr is less than the length of array
                    and nums[left] == nums[left-1])
                    if left ptr has a dupe in its previous elem,
                    then we'll increment our left pointer
        
    */





    // let resultCount = 0
    // let numsFreq = {}

    // for( let i = 0; i < nums.length; i++){
    //     let currNum = nums[i];
    //     if(numsFreq[currNum]!== undefined){
    //         numsFreq[currNum] = 0
    //     }

    //     numsFreq[currNum] += 1

    //     if(numsFreq[currNum-k]!==undefined){
    //         resultCount++
    //     }

    // }

    //     let currNum = nums[i];
    //     if(numsFreq[currNum]!== undefined){
    //         numsFreq[currNum] = 0
    //     }
    //     numsFreq[currNum] += 1
    //     maxValue = Math.max(maxValue, currNum)
    //     minNum = Math.min(minNum, currNum)
    // }
    // for( let i = minNum; i <= maxValue; i++){
    //     let secondHalf = minNum + k 
    //     // we'll try to find the target number as well as the second half of numPair
    //     if(numsFreq[i]!== undefined && numsFreq[secondHalf]!==undefined){
    //         resultCount++
    //         numsFreq[i] -= 1
    //         numsFreq[secondHalf] -= 1

    //         if(numsFreq[i] === 0) delete numsFreq[i]
    //         if(numsFreq[secondHalf] === 0 )delete numsFreq[secondHalf]
    //     }
    //     if(numsFreq[secondHalf] === 0 )delete numsFreq[secondHalf]
    //     if(numsFreq[i] === 0) {
    //         delete numsFreq[i]
    //     }else{
    //         i--
    //     }
}



