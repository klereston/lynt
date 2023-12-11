function httpCollect(){
const http = require('node:http');
const concatStream = require('concat-stream');
const url = process.argv[2];

http.get(url, (response:any) => {
    // Use 'bl' package to collect entire stream of data
    response.pipe(concatStream((data:any) => {

        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
}

httpCollect()