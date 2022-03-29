// const EventEmitter = require('events');
const Logger = require('./logger');
var log = new Logger();

// Register a uniqueEventName Event
log.on('uniqueEventName', (eventArg)=>{
    console.log(eventArg);
    console.log("Register");
    console.log(module);
    console.log(global);
});

log.log('Muthu');



