Array.prototype.MyReduce = function(cb,iV){
    
    let si = iV?0:1;
    let res = iV?iV:this[0];
    
    for(let i = si;i< this.length;i++){
        res = cb(res,this[i],this);
    }

    return res;
}

var arr = [2,2,3,4];

var res = arr.MyReduce(function(acc,curr,arr){
    return acc + curr;
},0)

console.log(res);