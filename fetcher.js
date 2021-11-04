const request = require('request');
const fs = require("fs");

const argv = process.argv;

let netUrl = argv[2];
let localUrl = argv[3];

request(netUrl, (error, response, body) => {
  fs.writeFile(localUrl, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file written successfully");
  });
});

















