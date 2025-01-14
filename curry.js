function sum(a,b,c,d,e){
    return a + b + c + d + e;
}

// function curryFunc(fn){
//     var currCtr = 1
    
//     return function func(...args){
//         if(fn.length > currCtr){
//             return function(b){
//                 currCtr++;
//                 return func(...args,b);
//             }
//         }else{
//             return fn.call(this,...args);
//         }
//     }
// }

function curry(fn){
    
    return function curriedFunc(...args){
        if(args.length >= fn.length){
            return fn.call(this,...args);
        }else{
            return function(...next){
                return curriedFunc(...args,...next);
            }
        }
    }
}

const curriedOutput = curry(sum);

console.log(curriedOutput(2)(3)(4)(6)(7));