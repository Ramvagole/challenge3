function highestPaid(employees){
    let b=employees.filter((v)=>{
        return v.salary>60000;
    });
    let [c]=b;
    console.log(c);
}
function destructuringToSwap(employees){
    let [a,b,c]=employees;
    let d=[c,b,a];
    console.log(d);
}
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
highestPaid(employees);
destructuringToSwap(employees);