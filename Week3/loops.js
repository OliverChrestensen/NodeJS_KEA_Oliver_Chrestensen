//Smartphones

//why dont we like for loops in JS
//Overly verbose
//Error prone
//not functional

const smartPhones = [
    { brand: "Samsung", price: 4500},
    { brand: "iPhone", price: 7200 },
    { brand: "Sony Experia", price: 3800}
    
];

console.log(smartPhones);

//task create a phone sale by subtracting 500 from each phone

const discointedPhones = smartPhones.map(smartPhone =>{
    smartPhone.price -= 500;
    return smartPhone;

});

console.log(discointedPhones);

//task i am a poor boy, remove all smartphones that costs over 4000

const PhonesUnder4000 = smartPhones.filter(smartPhone => smartPhone.price <= 4000);

console.log(PhonesUnder4000);




