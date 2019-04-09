//https://nodejs.org/dist/latest-v11.x/docs/api/fs.html#fs_fs_readfilesync_path_options

const fs = require('fs');

// node is single thread, always use asyn 

const files = fs.readdirSync('/');
console.log(`files : ${files}`);

fs.readdir('./', function (err, files) {

    if (err) console.log('Error', err);
    else console.log('Result', files);
});


const file = fs.readFileSync('C:\\Users\\xing\\Desktop\\node\\logger.js');

console.log(`file : ${file}`);
