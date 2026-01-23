const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area 1:", area);

radius = 4;
area = radius * radius * PI;
console.log("Area 2:", area);

const one = 1;
const two = '2';
console.log("Coercion result:", one + two); // Should output '12'

let course = "CSE131"; 
if (true) {
    let student = "John";
    console.log(course);  // Works (Global)
    console.log(student); // Works (Inside block)
}
console.log(course); 
// console.log(student); // This would cause an error if uncommented