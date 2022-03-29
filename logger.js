const EventEmitter = require('events');


class Logger extends EventEmitter {

    log(msg) {
        console.log("Message :\n", msg);
        this.emit("uniqueEventName", {
            id: 90420,
            name: 'vicky',
            date: new Date
        });
        console.log("Emiter");
        console.log(module);
        console.log(global);
    }
}

module.exports = Logger;