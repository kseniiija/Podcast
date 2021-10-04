const emailForm = document.forms.emailForm
const emailInput = emailForm.elements.email

emailForm.addEventListener("submit", submitForm) 
const mailformat = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,6})$/;

function submitForm(e) {
    e.preventDefault()

    if (emailInput.value.match(mailformat)) {
        console.log(emailInput.value)
    } else {
        alert("Ooopss! You miss email.")
    }
}