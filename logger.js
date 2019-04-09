//https://nodejs.org/dist/latest-v11.x/docs/api/events.html

const EventEmitter = require('events'); //Class
class MyEmitter extends EventEmitter { } //Class 
const myEmitter = new MyEmitter();//Object

//Register a listener 
myEmitter.on('messageLogged', (arg) => { //e, eventarg
    console.log(`Listener called! ${arg}`); //Listener called! [object Object]
    console.log('Listener called!', arg); //Listener called! { id: 1, url: 'http://google.com' }
});
//Raise an event
myEmitter.emit('messageLogged', { id: 1, url: 'http://google.com' });


//Register a listener 
myEmitter.on('loggin', (arg) => { //e, eventarg
    console.log(`Listener called! ${arg}`); //Listener called! [object Object]
    console.log('Listener called!', arg); //Listener called! { id: 1, url: 'http://google.com' }
});

//Raise :loggin
myEmitter.emit('loggin', { id: 2, url: 'http://msdn.com' });
