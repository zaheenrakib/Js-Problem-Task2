const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateCurrentSalary(employees){
    for( const employe of employees){
        const totalSalaryAll =  (employe.experience * employe.increment) + employe.starting;
        let sumAll = [0];
        for( let i = 0 ; i < totalSalaryAll.length ; i ++){
            sumAll.push(totalSalaryAll)
            sumAll++
        }
        return sumAll;
       
    }

}


const totalSalary = calculateCurrentSalary(employees)
console.log(totalSalary);

