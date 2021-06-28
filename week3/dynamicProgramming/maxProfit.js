/*
    startTime = [1,2,3,3]
    endTime =   [3,4,5,6]
    profit = [50,10,40,70]
    
    maxProfit
    
    if end of elem is greater than or equal to start of next elem, then we check 
        setMax profit
        
    a check that compare the profit of overlapping elems

*/
var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    let n = startTime.length;

    // store profit startTime and endTime into a triplet
    for(let i = 0;i < n;i++){
        jobs.push({s:startTime[i],end:endTime[i],p:profit[i]});
    }

    // sort our job array in ascending order based on its endtime
    jobs.sort((a,b) => {
        return a.end - b.end;
    })

    // create a dp Array of size n 
    let dp = new Array(n);
    // set index 0 of our dp array as the profit of the first job, 
    //  which is the one that ends first
    dp[0] = jobs[0].p;

    
    for(let i = 1;i < n;i++){
        // starting from the first job
        // profit === currentJob profit, currStart === currentJob startTime
        let profit = jobs[i].p;
        let currStart = jobs[i].s;

        let task = -1;
        // task is -1
        // we'll then go through a while loop, starting from a prior index of currElement, iterate to the left till we reach 0
        for(let j = i - 1;j >= 0;j--){
            // in this iteration, we'll be looking at the previous job end time
            //  and if the currStartartTime is greater than or equal to prev EndTime
            //  that means that the task does not overlaps
            //  in this case we set task as the index of prev task
            //  (task is set to the first elem that we see from current to 0th index that does not overlaps the current task)
            let prevEndTime = jobs[j].end;
            if(currStart >= prevEndTime){
                task = j;
                break;
            }
        }

        // in case of when there is a job that does not overlaps the current task
        // we'll then add the profit of such job into our profit result
        if(task != -1){
            profit += dp[task];
        }

        // update the value of dp to the maximum between maxProfit and the previous possible max profit
        dp[i] = Math.max(profit,dp[i - 1]);
    }

    return dp[n - 1];//last value from array going to be the max profit
};