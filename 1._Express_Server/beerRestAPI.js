const express = require('express')
const app = express();

const beers = []

app.use(express.json());

app.get('/',(req,res) => {
    res.send({message: 'Welcome to Beer API'});
});

app.get('/beers',(req,res) => {
    res.send({data: beers});
});

app.get('/beers/:beerID',(req,res)=>{
 // Reading beerID from the URL
const foundBeer =  beers.find(beer => beer.beerID === Number(req.params.beerID));
foundBeer ? res.send({data: foundBeer}) : res.status(204).send({});
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

app.patch('/beers/:beerID',(req,res)=>{
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
const foundBeerIndex = beers.findIndex(beer => beer.beerID === Number(req.params.beerID));

if(foundBeerIndex !== -1){
    beers.splice(foundBeerIndex,1);
    res.send({})
} else {
    res.status(404).send({})
}
})

app.listen(8080);