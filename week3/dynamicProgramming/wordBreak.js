/*  139
    Given a string s and a dictionary of strings wordDict, 
    return true if s can be segmented into a space-separated sequence of one or more dictionary words.

    Note that the same word in the dictionary may be reused multiple times in the segmentation.

    Input:  s = "catsandog", 
            wordDict = ["cats","dog","sand","and","cat"]
    Output: false

    2pointers .dp[j] = True/False

    dp = [True] + [False]*n 
    we are doing this because empty substrng will still be considered true


    idea is to check if sub-sequence is in the dictionary
*/
function wordBreak(){
    const set = new Set(wordDict);
    const n = s.length;
    const dp = [];

    // from i to the length of our 
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = false;
        }
    }

    for (let len = 1; len <= n; len++) {
        // from 1 to i < n+1
        for (let start = 0; start < n - len + 1; start++) {
            // from 0 to n-len+1, where they are split
            const end = start + len - 1;
            
            const substr = s.substring(start, end + 1);
            if (set.has(substr)) {
                dp[start][end] = true;
                continue;
            }
            
            for (let mid = start; mid <= end; mid++) {
                if (dp[start][mid] && dp[mid + 1][end]) {
                    dp[start][end] = true;
                    break;
                }
            }
        }
    }

    return dp[0][n - 1];
}
