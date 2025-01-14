Promise.myAll = function(promiseArr){

    let res = [];
    let pending = promiseArr.length;

    return new Promise((resolve,reject) =>{
     promiseArr.forEach((promise,idx) => {
        Promise.resolve(promise)
        .then((result)=>{
            res[idx] = result;
            pending--;

            if(pending === 0){
                resolve(res)
            }
            // resolve();
        },reject)
     });
     return res;   
    })
}

var p1 = 23;
var p2 = new Promise((resolve,reject)=>{

    console.log("here");
    
    setTimeout(()=>{
        console.log('hello');
        resolve('done');
    },3000)
});

var p3 = Promise.resolve("123");

var p4 = Promise.myAll([p1,p2,p3]);

p4.then((values) => {
    console.log(values);
})
.catch((err) => {
    console.log(err);
})