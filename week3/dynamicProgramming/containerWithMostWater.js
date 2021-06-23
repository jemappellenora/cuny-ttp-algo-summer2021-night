var maxArea = function(height) {
    // let maxContainer = 0;
    // for(let i = 0; i < height.length; i++){
    //     for(let j = height.length - 1 ; j >= i+1; j--){
    //         let width = j-i
    //         let volume = height[i] * width
    //         if( height[j] >= height[i]){
    //             maxContainer = Math.max(maxContainer, volume)
    //         }else{
    //             volume = height[j] * width
    //             maxContainer = Math.max(maxContainer, volume)
    //         }
    //     }
    // }
    // return maxContainer
    let maxVolumn = 0,
        left = 0,
        right = height.length-1
    while(right!== left){
        let currentWidth = right- left
        let minHeight = Math.min(height[left], height[right])
        
        maxVolumn = Math.max(maxVolumn, currentWidth*minHeight)
        
        if( height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxVolumn
};