const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('customer.csv', 'utf8'))
    .split()
    .map(line => line.split(','))
    .map(pieces => ({
        name: pieces[0],
        number: Number(pieces[1])
    }))
    .each(x => console.log('each: ', x))

console.log('ended')

