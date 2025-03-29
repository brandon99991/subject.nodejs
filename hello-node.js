const http = require("http");

let count = 0;

const server = http.createServer((req,res) => {
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("adfdasfdasf\n");

    setTimeout(() => {
        res.end("hohoho");
    }, 2000);
})

server.listen(8000);
