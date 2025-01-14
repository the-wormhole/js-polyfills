const myDebounce = function(cb,d){
 let timer;
 return function(...args){
     if(timer) clearTimeout(timer);
     timer = setTimeout(() => cb(...args), d)
 }
}

function printHello(name){
    console.log(`Hello ${name}`);
}

const debouncedHello = myDebounce(printHello,2000);

debouncedHello("Nayan 1");
debouncedHello("Nayan 2");
debouncedHello("Nayan 3");
debouncedHello("Nayan 4");
debouncedHello("Nayan 5");
debouncedHello("Nayan 6");
debouncedHello("Nayan 7");