const express = require ('express'),
      path = require('path'),
      fs = require("fs"),
      app = express();

let dataBase = JSON.parse(fs.readFileSync('./data/dataBase.json'))

function compositionsList(array){
    array.forEach(item => {
        let compositions = [item.name];
        if(item.hasOwnProperty('opera')){
            item.opera.forEach(opera=>{
                compositions.push(['opera',opera.name])
            })
        }
        if(item.hasOwnProperty('cont')){
            item.cont.forEach(cont=>{
                compositions.push(['cont',cont.name])
            })
        }
        if(item.hasOwnProperty('camer')){
            item.camer.forEach(camer=>{
                compositions.push(['camer',camer.name])
            })
        }
        item.compositionsList = compositions;
    });
}

compositionsList(dataBase);


app.get('/', function (req, res) {
        res.send(JSON.stringify(dataBase))
    });
    
app.listen(3001)

