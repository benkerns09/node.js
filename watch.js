const fs = require('fs');//requires the fileSystem package. 

const print = (what) => { return 'Hey: ' + what;}//this is an error function returning a string. If you are only passing one argument, we DOn't need to wrap in parenthesis

fs.watch('./README.md', () => {//retreiving it from folder
    console.log(print('Ouch'));
});

module.exports = print; 

//^^watching the ReadMe files for changes. Will print out every time