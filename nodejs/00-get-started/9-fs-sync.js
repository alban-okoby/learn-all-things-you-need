const { readFileSync, writeFileSync } = require('fs');

console.log('Starting...');

const first = readFileSync ('./content/firstContent.txt', 'utf8');
const second = readFileSync ('./content/secondContent.txt', 'utf8');

writeFileSync ('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'});

console.log('Done with this task');
console.log('Starting the next task');