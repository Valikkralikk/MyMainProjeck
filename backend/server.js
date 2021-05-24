const express = require ('express'),
      fs = require("fs"),
      Compositors = require('./module/Compositors.js'),
      CompositionsList = require('./module/CompositionsList.js'),
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
        const compositiors = new Compositors();
        compositiors.render().then(html=>{
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                });
            res.end(html);
        })
    });

app.get('/dataBase', function (req, res) {
        return new Promise(resolve=>{
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                });
            resolve(res.end(fs.readFileSync('./data/dataBase.json')))
        })
    });

app.get('/compositions',function (req,res) {
    const compositionsList = new CompositionsList(req.url);
    compositionsList.render().then(html=>{
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            });
        res.end(html)
    })
})

app.get('/compositions/:author',function (req,res) {
    const compositionsList = new CompositionsList(decodeURI(req.url));
    compositionsList.render().then(html=>{
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            });
        res.end(html)
    })
})

app.listen(3001,()=>{
    console.log('server started')
})