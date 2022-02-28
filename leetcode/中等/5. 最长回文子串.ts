function longestPalindrome(s: string): string {
    const help = (s)=>{
        s = s.toLowerCase();
        for(let i = 0; i<s.length/2; i++){
            if(s[i]!=s[s.length-i-1]){
                return false;
            }
        }
        return true;
    }
    let len = s.length;
    let max = 0;
    let ans = '';
    for(let i = 0; i<len; i++){
        for(let j = i+1; j<=len; j++){
            let test = s.substring(i, j);
            if(help(test) && test.length>max){
                ans = test;
                max = test.length;
            }
        }
    }
    return ans;
};

function longestPalindrome2(s: string): string {
    let Resleft = 0;
    let Resright = 0;
    let maxLen = 0;
    
    let i = 0; //设i为中心的索引
    while(i < s.length) {
        let left = i - 1;
        while (left >= 0 && s[i] === s[left]) {
            left--;
        }
        let right = i + 1;
        while (right < s.length && s[i] === s[right]) {
            right++;
        }
        const end = right; //这里的right是右边第一个跟中心s[i]不相等的字符索引，保存下来，等会i直接跳到end处，可减少重复中心的计算
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLen < right - left - 1) {
            maxLen = right - left - 1;
            Resleft = left + 1;
            Resright = right - 1;
        }
        i = end; 
    }
    return s.substring(Resleft, Resright + 1);

}