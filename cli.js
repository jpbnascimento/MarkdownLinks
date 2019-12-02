#! /usr/bin/env node 

const mdLinks = require('./lib/index.js');
console.log(process.argv)
const path = process.argv[2]
console.log(path)

mdLinks(path)
    .then(result => console.log(result))
    .catch(error => console.log(error))