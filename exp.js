const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Hello");
})

app.get('/home/:id',function(req,res){
    const id = req.params.id
    res.send("Name: "+id);
})

app.listen(9000);
