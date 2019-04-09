const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);
