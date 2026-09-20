// Constants and Variables
const PI = 3.14;
let radius = 3;
let area = radius * radius * PI;
console.log(area);        // 28.26

radius = 20;              // allowed: let can be reassigned
area = radius * radius * PI;
console.log(area);        // 1256

// PI = 3.14159;          // TypeError: Assignment to constant variable.

// Type Coercion
const one = 1;
const two = '2';
let result = one * two;
console.log(result);      // 2  (the string '2' is converted to a number)
result = one + two;
console.log(result);      // "12" (+ with a string joins the two as text)
result = one + Number(two);
console.log(result);      // 3  (explicit conversion)

// Global and Block Scope
let course = "CSE131";    // global scope
if (true) {
  let student = "John";
  console.log(course);    // works: course is global
  console.log(student);   // works: accessed inside its block
}
console.log(course);      // works: course is global
console.log(student);     // ReferenceError: student is not defined