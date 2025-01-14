const myThrottle = function(cb,d){
    let last = 0;
    
    return function(...args){ 
        
        let now = new Date().getTime();
        if(now - last < d) return;
        last = now;
        return cb(...args);
    }
}

function printHello(name){
    console.log(`Hello ${name}`);
}

const throttledHello = myThrottle(printHello,1000);

throttledHello("1");
throttledHello("2");
throttledHello("3");
throttledHello("4");
throttledHello("5");