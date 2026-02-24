// Activity 1: Map - Convert steps array to HTML list items
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2: Map - Convert Letter Grades to GPA Points
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
    let points = 0;
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            console.error('Not a valid grade');
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
console.log("GPA Points Array:", gpaPoints);

// Activity 3: Reduce - Calculate Average GPA
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;
console.log("Calculated GPA:", gpa.toFixed(2));

// Activity 4: Filter - Short Words
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter((word) => word.length < 6);
console.log("Filtered words (less than 6 characters):", shortWords);

// Activity 5: indexOf - Find the lucky number
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log("The index of the lucky number is:", luckyIndex);