const f = require('fs');

//f.readFile('filename.txt','utf-8',(err,data)=>{
//    console.log(err,data);
//})

const a = f.readFileSync('filename.txt');
console.log(a.toString());

f.writeFile('filename.txt',"This time it will be Arsenal",()=>{
    console.log("Written");
})