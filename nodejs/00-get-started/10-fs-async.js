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

        writeFile('./content/result-sync.txt .txt', `Hre is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Done with this task');
        })

    })
})
console.log('Starting the next task');