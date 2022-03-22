const { coolDinosaur, } = require("./dinosaurs.json");


function amountOfCooldinosaurs(){
    return coolDinosaur.length
}

module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs
}
