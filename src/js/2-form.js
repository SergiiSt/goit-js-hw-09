const emailInput = document.querySelector('input[name="email"]');
function setPlaceHolder() {
    if (document.activeElement === emailInput) {
        emailInput.setAttribute('placeholder', 'Type area');
    }
    else {
        emailInput.removeAttribute('placeholder');
    }
}

emailInput.addEventListener('focus', setPlaceHolder);
emailInput.addEventListener('blur', setPlaceHolder);