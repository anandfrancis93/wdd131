const aCourse = {
  code: 'CSE121b',
  name: 'Javascript Language',
  logo: 'images/js-logo.png',
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
  ],
  enrollStudent: function (sectionNum) {
    // Find the correct section with Array.findIndex
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  }
};

// Show the course name and code in the h1 and h2
function setCourseInfo(course) {
  document.querySelector('#courseName').textContent = course.name;
  document.querySelector('#courseCode').textContent = course.code;
}

// Make one table row for one section
function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

// Show all sections in the table body
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector('#sections').innerHTML = html.join('');
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

document.querySelector('#enrollStudent').addEventListener('click', function () {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.enrollStudent(sectionNum);
});