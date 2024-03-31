const OS = require('os');

// Info about current user
const user = OS.userInfo();
console.log(user);

// Info about System (version)
console.log(OS.version());

const currentOS = {
    name: OS.type(),
    release: OS.release(),
    totalMem: OS.totalmem(),
    freeMem: OS.freemem(),
}
console.log(currentOS)