// import express from 'express';
const express = require('express');
const port = 3000;
const app = express();


app.use(express.static(__dirname + '../../'));


app.get('/', (req, res) => {
    res.sendFile(`/src/index.html`, { root: '.' })
}
    )
   

app.listen(port, () => {console.log('listening on port ' + [port] +'\nAcesse: ' + "http://localhost:"+port)});