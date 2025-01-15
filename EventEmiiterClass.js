function EventEmitter(){
    
    var listeners = {};
    this.on = function(eventName,cb){
        let key = Object.keys(listeners).find((key) => key === eventName);

        if(key){
            listeners[key].push(
            //     {
            //     name:eventName,
            //     action:cb
            // }
            cb)
        }else{
            listeners[eventName] = [cb];
        }
        return listeners[eventName].length - 1;
    };
    
    this.emit = function(eventName,data=""){

        if(listeners.hasOwnProperty(eventName) === false){
            throw new Error("No such event declared!!");
        }
        
        var allActions = listeners[eventName];
        // listeners.filter(({name})=>{
        //     return name === eventName;
        // })
        
        allActions.forEach((action)=>{
            action.apply(this,[data]);
        });
    }
    
    this.off = function(eventName,idx){

        if(idx){
            listeners[eventName].splice(idx,1);
        }else{
            delete listeners[eventName];
        }
        
        // var newListeners = listeners.filter(({name})=>{
        //     return name !== eventName;
        // })
        
        // listeners = [...newListeners];
    }
}

var myEmitter = new EventEmitter();

var f1 = myEmitter.on("message",(msg)=>{
    console.log(`The message is - ${msg} as per action 1`);
})

myEmitter.emit("message","Hey");

var p1 = myEmitter.on("ping",()=>{
    console.log("pong")
});

myEmitter.emit("ping");

var f2 = myEmitter.on("message",(msg)=>{
    console.log(`The message is - ${msg} as per action 2`);
})

myEmitter.emit("message","WAZAAAAAA!!!!");

myEmitter.off("message",f2);

myEmitter.emit("message","WAZAAAAAA!!!!");
