const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateCurrentSalary(employee){
    let totalSalarys = 0;
    for(let i = 0; i < employee.length;i++){
        const employees = employee[i];
        const currentSalary = employees.starting + (employees.experience * employees.increment);
        totalSalarys = totalSalarys + currentSalary; 
    }
    return totalSalarys;
}
const totalSalary = calculateCurrentSalary(employees);

console.log("Total salary to be provided by the company in a month:", totalSalary);

