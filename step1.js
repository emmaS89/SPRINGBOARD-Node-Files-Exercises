const fs = require('fs');

const process = require('process');

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

let path = process.argv[2];

cat(path);

