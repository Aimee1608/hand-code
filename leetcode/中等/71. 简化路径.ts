/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    const stack = [];
    let i = 0;
    let start = 0;
    let len = 0;
    while(i<path.length){
        if(path[i] === '/'){        
            if(len!=0){
                const s = path.substr(start, len);
                if(s === '..'){
                    stack.pop();
                }else if(s!='.'){
                    stack.push(s);
                }
                start = 0;
                len = 0;
            }
        } else{
            if(len === 0){
                start = i;
            }  
            len++;    
        }
         i++
    }
     if(len!=0){
        const s = path.substr(start, len);
        if(s === '..'){
            stack.pop();
        }else if(s!='.'){
            stack.push(s);
        }
    }
    return '/' + stack.join('/')
};



var simplifyPath2 = function(path) {
    const stack = [];
    const list = path.split('/')
    let i = 0;
    while(i<list.length){
        if(list[i] === '..'){       
              if (stack.length) {
                stack.pop();
            } 
        } else if(list[i].length &&list[i]!='.'){
           stack.push(list[i])
        }
         i++
    }

    return '/' + stack.join('/')
};


function interval(callback, duration){
    let timer = null
    let last = Date.now();
    function fn(){
        const time = Date.now()
        if(time-last>duration){
            console.log('end',new Date())
            last = time;
            callback()
        }
        timer = requestAnimationFrame(fn)
        return timer
    }
    
    
    timer = requestAnimationFrame(fn)
    return timer
}
interval(function(){
    console.log('callback')
}, 1000)



function timeout(callback, duration){
    let timer = null
    let last = Date.now();
    function fn(a){
        console.log(a)
        const time = Date.now()
        if(time-last>=1000){
            console.log('end',new Date())
            callback()
            cancelAnimationFrame(timer)
            return
        }
        timer = requestAnimationFrame(fn)
        return timer
    }
    
    console.log('start',new Date())
    timer = requestAnimationFrame(fn)
    return timer
}
timeout(function(){
    console.log('callback')
}, 1000)