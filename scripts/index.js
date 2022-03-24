const passField = document.querySelector("input#password")
const confirmPassField = document.querySelector("input#confirm-password")

const minimumPasswordLength = 8
const passwordErrorClassName = "error"

function checkPasswordConfirmation(event) {
    let password = passField.value 
    let confirmation = confirmPassField.value 

    if(confirmation.length == 0 || password == confirmation) {
        /*if(password.length >= 8)*/ passField.classList.remove(passwordErrorClassName)
        confirmPassField.classList.remove(passwordErrorClassName)
    } else {
        passField.classList.add(passwordErrorClassName)
        confirmPassField.classList.add(passwordErrorClassName)
    }
    /*
    if(password.length < 8) {
        passField.classList.add(passwordErrorClassName)
        
        // TODO add hovering box instead of creating a alert
        alert("password length is too low, minumum is 8 characters")
    }*/
}

passField.addEventListener('focusout', checkPasswordConfirmation)
confirmPassField.addEventListener('focusout', checkPasswordConfirmation)
