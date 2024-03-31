const { readFile, writeFile } = require('fs');

console.log('Starting...');
readFile('./content/firstContent.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/secondContent.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);

        writeFile('./content/result-sync.txt', `Hello second content !: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Done with this task');
        })

    })
})
console.log('Starting the next task');