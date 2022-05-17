const EventEmitter=require ('events');


var url='localhost:8081'
class Logger extends EventEmitter{
 log(message){
        console.log(message);
    

    this.emit('messageLogged');
 }
}


module.exports = Logger;