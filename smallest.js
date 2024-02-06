const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmall(names){
    let smallName = names[0];

    for(let i = 1;i < names.length;i++){

        let curentName = names[i];

        if(curentName.length < smallName.length){

            smallName = curentName;
        }
    }
    return smallName;
}

const nama = findSmall(heights2);
console.log(`The Small name : ${nama}`);
