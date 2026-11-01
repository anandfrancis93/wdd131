const form = document.querySelector("#ticketForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const attendeeType = document.querySelector("#attendeeType");
const eventDate = document.querySelector("#eventDate");
const credentialContainer = document.querySelector("#credentialContainer");
const credentialLabel = document.querySelector("#credentialLabel");
const credential = document.querySelector("#credential");
const credentialHelp = document.querySelector("#credentialHelp");
const output = document.querySelector("#output");

// Use local dates to avoid UTC timezone differences.
function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function updateMinimumDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  eventDate.min = formatLocalDate(tomorrow);
}

// Show the correct label and input requirements for each type.
function updateCredentialField() {
  const type = attendeeType.value;
  const showField = type === "student" || type === "guest";

  credentialContainer.hidden = !showField;
  credential.disabled = !showField;
  credential.required = showField;
  credential.value = "";
  credential.removeAttribute("aria-invalid");

  if (type === "student") {
    credentialLabel.textContent = "Student I#";
    credentialHelp.textContent = "Enter your 9-digit student I number.";

    credential.minLength = 9;
    credential.maxLength = 9;
    credential.pattern = "[0-9]{9}";
    credential.inputMode = "numeric";
    credential.title = "Enter exactly 9 digits.";
  } else if (type === "guest") {
    credentialLabel.textContent = "Access Code";
    credentialHelp.textContent = "Enter the event access code: EVENT131.";

    credential.minLength = 8;
    credential.maxLength = 8;
    credential.pattern = "EVENT131";
    credential.inputMode = "text";
    credential.title = "Enter EVENT131 exactly, using uppercase letters.";
  }
}

attendeeType.addEventListener("change", updateCredentialField);
eventDate.addEventListener("focus", updateMinimumDate);

updateCredentialField();
updateMinimumDate();

function clearFeedback() {
  output.replaceChildren();
  output.className = "";

  form.querySelectorAll('[aria-invalid="true"]').forEach(field => {
    field.removeAttribute("aria-invalid");
  });
}

function showErrors(errors) {
  output.className = "error";

  const heading = document.createElement("h2");
  heading.textContent = "Please correct the following:";

  const list = document.createElement("ul");

  errors.forEach(error => {
    const item = document.createElement("li");
    item.textContent = error.message;
    list.appendChild(item);

    error.field.setAttribute("aria-invalid", "true");
  });

  output.append(heading, list);
  errors[0].field.focus();
}

function addTicketDetail(label, value) {
  const paragraph = document.createElement("p");

  // textContent safely displays user input as plain text.
  paragraph.textContent = `${label}: ${value}`;
  output.appendChild(paragraph);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearFeedback();
  updateMinimumDate();

  firstName.value = firstName.value.trim();
  lastName.value = lastName.value.trim();
  email.value = email.value.trim();
  credential.value = credential.value.trim();

  const errors = [];
  const type = attendeeType.value;

  if (!firstName.checkValidity()) {
    errors.push({
      field: firstName,
      message: "Enter a first name between 1 and 50 characters."
    });
  }

  if (!lastName.checkValidity()) {
    errors.push({
      field: lastName,
      message: "Enter a last name between 1 and 50 characters."
    });
  }

  if (!email.checkValidity()) {
    errors.push({
      field: email,
      message: "Enter a valid email address."
    });
  }

  if (type !== "student" && type !== "guest") {
    errors.push({
      field: attendeeType,
      message: "Please choose Student or Guest."
    });
  }

  const today = formatLocalDate(new Date());

  if (
    !eventDate.checkValidity() ||
    !eventDate.value ||
    eventDate.value <= today
  ) {
    errors.push({
      field: eventDate,
      message: "Please choose an event date later than today."
    });
  }

  if (type === "student" && !/^[0-9]{9}$/.test(credential.value)) {
    errors.push({
      field: credential,
      message: "Student I# must be exactly 9 digits."
    });
  }

  if (type === "guest" && credential.value !== "EVENT131") {
    errors.push({
      field: credential,
      message: "The access code must be EVENT131."
    });
  }

  if (errors.length > 0) {
    showErrors(errors);
    return;
  }

  // Create the ticket only after every validation check passes.
  output.className = "success";

  const heading = document.createElement("h2");
  heading.textContent = "Ticket Created";
  output.appendChild(heading);

  addTicketDetail("Name", `${firstName.value} ${lastName.value}`);
  addTicketDetail("Email", email.value);
  addTicketDetail("Type", type === "student" ? "Student" : "Guest");
  addTicketDetail("Event Date", eventDate.value);

  // Reset the form and hide the conditional field.
  form.reset();
  updateCredentialField();
  updateMinimumDate();
});