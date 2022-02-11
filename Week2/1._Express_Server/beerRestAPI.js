const express = require('express')
const app = express();

const beers = []

app.use(express.json());

app.get('/',(req,res) => {
    res.send({message: 'Welcome to Beer API'});
});

app.get('/beers',(req,res) => {
    res.json(beers);
});

app.get('/beers/:beerID',(req,res)=>{
 // Reading beerID from the URL
const beerID = req.params.beerID;

for(let beer of beers){
    if (beer.beerID == beerID){
        res.json(beer);
        return;
    }
  
}
console.log('This is a single beer')
res.status(404).send('Beer not found');
});

app.post('/beers',(req,res)=> {
    const beer = req.body;
    console.log
    beers.push(beer)
    res.send('Book is added to Books[]')
});

app.put('/beers/:beerID',(req,res)=>{
// Reading beerID from the URL
const beerID = req.params.beerID;
const newBeer = req.body;

    for(let i = 0; i<beers.length; i++){
        let beer = beers[i]
        if(beer.beerID == beerID){
            beers[i] = newBeer;
        }
    }
    res.send('Beer is changed')
})

app.patch('/beers:beerID',(req,res)=>{
    const beerID = req.params.beerID;
    const newBeer = req.body;
    
        for(let i = 0; i<beers.length; i++){
            let beer = beers[i]
            if(beer.beerID == beerID){
                beers[i] = newBeer;
            }
        }
        res.send('Beer is changed')    
})

app.delete('/beers/:beerID',(req,res)=>{
const beerID = req.params.beerID

for (let i = 0; i < beers.length; i++) {
    let beer = beers[i];

    if(beer.beerID == beerID) {
        beers.splice(beers.indexOf(beer), 1);
    }
}
res.send('Ale was deleted');
})

app.listen(8080);