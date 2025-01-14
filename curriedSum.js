function sum(a,b){
    return a + b;
}
function curry(add){
    
    return function sumCurry(a){
        
        return function(b){
            if(b) return sumCurry(add(a,b));
            
            return a;
        }
    }
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4)());