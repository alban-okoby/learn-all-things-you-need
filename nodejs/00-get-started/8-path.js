const path = require('path');

console.log(path.sep);

// File path
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);

// Base name
const basePath = path.basename(filePath);
console.log(basePath);

// Absolute path
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolutePath)