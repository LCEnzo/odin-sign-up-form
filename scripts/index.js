const passField = document.querySelector("input#password")
const confirmPassField = document.querySelector("input#confirm-password")
const submit = document.querySelector("#create-account-button")
const form  = document.getElementsByTagName('form')[0];
const inputList = document.querySelectorAll(".input-container > input")

function showSubmitErrMsg(text) {
    const errMsg = document.querySelector("#submit-error-message")
    errMsg.hidden = false
    errMsg.innerHTML = text
}

function hideSubmitErrMsg() {
    const errMsg = document.querySelector("#submit-error-message")
    let attr = document.createAttribute('hidden');
    errMsg.hidden = true
}

const minimumPasswordLength = parseInt(passField.attributes["minlength"].value)
const passwordErrorClassName = "inputError"

let el = ""
function checkValidity(event) {
    const target = event.target

    event.stopPropagation();

    if(target.checkValidity()) {
        target.classList.remove(passwordErrorClassName)
    } else {
        target.classList.add(passwordErrorClassName)
    }

    if(target === passField || target === confirmPassField) {
        if(passField.value.length == 0 && confirmPassField.value.length === 0) {
            passField.classList.remove(passwordErrorClassName)
            confirmPassField.classList.remove(passwordErrorClassName)
            hideSubmitErrMsg()
        } else if(target.checkValidity() && (passField.value === confirmPassField.value)) {
            passField.classList.remove(passwordErrorClassName)
            confirmPassField.classList.remove(passwordErrorClassName)
            hideSubmitErrMsg()
        } else if(confirmPassField.value !== "") {
            passField.classList.add(passwordErrorClassName)
            confirmPassField.classList.add(passwordErrorClassName)
            showSubmitErrMsg("Password and confirm password fields do not match.")
        }
    }
}

for(let node of inputList) {
    node.addEventListener('input', checkValidity)
}
