const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function findAveragePhonePrice(phonesObj){
    let total = 0;
    let averagePrice;
    for(let phonP of phonesObj){
       total = total + phonP.price;
       averagePrice = total / phonesObj.length;
    }
    const ret = parseInt(averagePrice);
        return ret;
}

const averagePrices =  findAveragePhonePrice(phones);
console.log(`The average price of phones is: ${averagePrices}`);