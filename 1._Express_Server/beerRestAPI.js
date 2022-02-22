const express = require('express')
const app = express();
app.use(express.json());

const beers = []

let CURRENT_ID = 0;

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
    const beerToCreate = req.body;
    beerToCreate.beerID = ++CURRENT_ID;
    beers.push(beerToCreate)
    res.send({data: beerToCreate})
});

app.patch('/beers/:beerID',(req,res)=>{
    const foundBeerIndex = beers.findIndex(beer => beer.beerID === Number(req.params.id));
    const foundBeer = beers[foundBeerIndex];

    const beerToUpdateWith = req.body;
    const updatedBeer = {...foundBeer, ...beerToUpdateWith, id: foundBeer.beerID};
    beers[foundBeerIndex] = updatedBeer;

    res.send({data: updatedBeer })    
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