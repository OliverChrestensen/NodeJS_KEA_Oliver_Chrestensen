const { response } = require("express")

console.log("RRRRRWWWAAAAAAAAAARRRRWWWWW")

fetch('/calculatecooldinosaurs')
    .then(response => response.json())
    .then(result => {
        const favoriteDinosaurAmout = document.getElementById("cool-dinosaurs")
    
        favoriteDinosaurAmout.innerText = result.data
    })

    

