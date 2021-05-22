const express = require ('express'),
    //   path = require('path'),
      fs = require("fs"),
      Compositors = require('./module/Compositors.js'),
<<<<<<< HEAD
=======
      CompositionsList = require('./module/CompositionsList.js'),
>>>>>>> main
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
<<<<<<< HEAD

app.get('/source/image/*.jpg', function (req, res) {
        let path = 'C:/Users/Valikkralikk/Desktop/Реп. Frontend/JS/MyMainProjeck/backend/' + req.url;
        res.sendFile(path)
    });

app.get('/source/css/style.less', function (req, res) {
        let path = 'C:/Users/Valikkralikk/Desktop/Реп. Frontend/JS/MyMainProjeck/backend/' + req.url;
        res.sendFile(path)
    });


    
app.listen(process.env.PORT || 3001)
=======
>>>>>>> main

app.get('/compositions',function (req,res) {
    console.log(req.url)
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
    console.log(req.url)
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        });
    res.end(`<h1>${req.params.author}</h1>`)
})

app.listen(3001,()=>{
    console.log('server started')
})