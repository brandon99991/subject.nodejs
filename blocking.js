const fs = require('node:fs'); 

//fs.readFile은 비동기 메서드 
fs.readFile('file.md', (err, data) => {
    if (err) throw err;
    console.log(data.toString());    
});

//fs.unlinkSync은 동기 메서드 
fs.unlinkSync('file.md');
