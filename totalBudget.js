// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const totalLaptopPrice = laptopQuantity * perLaptop;
    const totalTabletPrice = tabletQuantity * perTablet;
    const totalMobilePrice = mobileQuantity * perMobile;

    const totalPrice = totalLaptopPrice + totalMobilePrice + totalTabletPrice;
    return totalPrice; 
}

const shooping = calculateElectronicsBudget(0,0,2);
console.log(shooping);