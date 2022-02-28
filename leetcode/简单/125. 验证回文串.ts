function isPalindrome(s: string): boolean {
    let ns = '';
    let i = 0;
    s= s.toLowerCase();
    let n = '';
    while(i<s.length){
        // const code = s[i].charCodeAt(0);
        let reg = /[a-zA-Z0-9]/g
        if(s[i].match(reg)){
            ns=s[i]+ns;
            n+=s[i];
        } 
        i++;
    }
    console.log(ns, n);
    return ns==n;
};
