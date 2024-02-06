
const heights2 = [167, 190, 120, 165, 137,50];

function lowestCount(numbers){
    let min = numbers[0];
    for( const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const num = lowestCount(heights2);
console.log(num);

