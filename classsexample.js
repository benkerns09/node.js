const fs = require('fs');

const print = what=>'Hey: ' + what;

fs.watch('./README.md', () => {//retreiving it from folder
    print('Ouch');
});