Function.prototype.myBind = function(context= {}, ...args){
    // console.log(typeof this)
    if(typeof this != "function"){
        console.log(typeof this)
        throw new TypeError(`${this} cannot to be bound to an object`);
    }
    
    context.fn = this;
    
    return function(...newArgs){
        return context.fn(...args,...newArgs);
    }
}

var a = {
    age:12,
    name:"Nayan"
}

function printAge(){
    console.log(`The age of ${this.name} is ${this.age}`);
}

var bindedPrintAge = printAge.myBind(a);
// [1,2,3].myBind(a);

bindedPrintAge();