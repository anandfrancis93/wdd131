const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const availableDateInput = document.querySelector("#availableDate");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

// Show and require travel notes when multiple campuses are selected.
function updateNotesField() {
  const multipleCampuses = travelRange.value === "many";

  notesContainer.hidden = !multipleCampuses;
  notes.required = multipleCampuses;
  notes.disabled = !multipleCampuses;

  if (!multipleCampuses) {
    notes.value = "";
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

// Format a date using the user's local calendar date.
function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// The earliest allowed start date is tomorrow.
function updateMinimumDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  availableDateInput.min = formatLocalDate(tomorrow);
}

updateMinimumDate();
availableDateInput.addEventListener("focus", updateMinimumDate);

// Date input values use YYYY-MM-DD, so they can be compared as strings.
// Today is also rejected because the assignment requires a later date.
function isPastDate(value) {
  const today = formatLocalDate(new Date());

  return !value || value <= today;
}

function getSelectedCampuses() {
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value);
}

function showError(message, field) {
  output.className = "error";
  output.textContent = message;

  if (field) {
    field.focus();
  }
}

// Use textContent so user-entered text is displayed safely.
function addSummaryLine(label, value) {
  const paragraph = document.createElement("p");
  paragraph.textContent = `${label}: ${value}`;
  output.appendChild(paragraph);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  output.replaceChildren();
  output.className = "";

  const firstNameInput = form.elements.namedItem("firstName");
  const lastNameInput = form.elements.namedItem("lastName");
  const emailInput = form.elements.namedItem("email");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const type = travelRange.value;
  const availableDate = availableDateInput.value;
  const selectedCampuses = getSelectedCampuses();
  const note = notes.value.trim();

  // Required text fields must contain more than spaces.
  if (!firstName) {
    showError("Please enter your first name.", firstNameInput);
    return;
  }

  if (!lastName) {
    showError("Please enter your last name.", lastNameInput);
    return;
  }

  emailInput.value = email;

  // HTML also validates required fields and the email format.
  updateMinimumDate();

  if (!form.reportValidity()) {
    return;
  }

  // At least one campus must be selected.
  if (selectedCampuses.length === 0) {
    showError("Please select at least one campus.", campusBoxes[0]);
    return;
  }

  // Multiple campuses require meaningful travel notes.
  if (type === "many" && !note) {
    showError(
      "Please add travel notes when choosing two or more campuses.",
      notes
    );
    return;
  }

  // The campus count must match the preference.
  if (type === "many" && selectedCampuses.length < 2) {
    showError("Please select at least two campuses.", campusBoxes[0]);
    return;
  }

  if (type === "one" && selectedCampuses.length !== 1) {
    showError(
      "Please select exactly one campus, or choose Two or more campuses.",
      travelRange
    );
    return;
  }

  if (isPastDate(availableDate)) {
    showError(
      "Please choose a start date later than today.",
      availableDateInput
    );
    return;
  }

  // Display a confirmation on this page.
  output.className = "success";

  const heading = document.createElement("h2");
  heading.textContent = "Preference Submitted";
  output.appendChild(heading);

  addSummaryLine("Name", `${firstName} ${lastName}`);
  addSummaryLine("Email", email);
  addSummaryLine("Availability", availableDate);
  addSummaryLine("Campuses", selectedCampuses.join(", "));
  addSummaryLine(
    "Preference Level",
    type === "one" ? "One campus" : "Two or more campuses"
  );

  if (type === "many") {
    addSummaryLine("Travel Notes", note);
  }

  form.reset();
  updateNotesField();
  updateMinimumDate();
});