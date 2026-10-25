// ---------- forEach ----------
const steps = ['one', 'two', 'three'];
const myList = document.querySelector('#myList');

steps.forEach(function (item) {
  console.log(item);
  const li = document.createElement('li');
  li.textContent = item;
  myList.appendChild(li);
});

// ---------- map: students into HTML with a template literal ----------
const students = [
  { last: 'Andrus', first: 'Aaron' },
  { last: 'Masa', first: 'Manny' },
  { last: 'Tanda', first: 'Tamanda' }
];

const container = document.querySelector('#studentContainer');
container.innerHTML = students
  .map(student => `<div class="student">${student.first} ${student.last}</div>`)
  .join('');

// ---------- map: letter grades to grade points ----------
function convert(grade) {
  let points;
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
      alert('not a valid grade');
  }
  return points;
}

const grades = ['A', 'B', 'F'];
const gpaPoints = grades.map(convert);
console.log(gpaPoints);                 // Array(3) [4, 3, 0]

// ---------- reduce: total and average ----------
const totalPoints = gpaPoints.reduce((total, item) => total + item, 0);
console.log(totalPoints);               // 7

const gpa = totalPoints / gpaPoints.length;
console.log(gpa);                       // 2.3333333333333335

// ---------- filter: words shorter than 6 letters ----------
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(word => word.length < 6);
console.log(shortWords);                // Array(3) ['peach', 'apple', 'grape']

// ---------- indexOf ----------
const appleIndex = words.indexOf('apple');
console.log(appleIndex);                // 2