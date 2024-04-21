const formEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function loadFromLocal() {

    const savedLocal = localStorage.getItem(localStorageKey);

     if (savedLocal) {
        try {
           
            const parsedData = JSON.parse(savedLocal);

          if (parsedData && typeof parsedData === 'object') {
            
                formEl.elements.email.value = (parsedData.email || '').trim();
                formEl.elements.message.value = (parsedData.message || '').trim();
            } else {
                console.error('Data in localStorage is not a valid JSON object.');
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }
}

  function saveToLocal() {

const toLocal = {
        email: formEl.elements.email.value.trim(),
        message: formEl.elements.message.value.trim()
    };
    
 localStorage.setItem(localStorageKey, JSON.stringify(toLocal));
    return toLocal;
}
function pushedSubmit(evt) {
      evt.preventDefault();
    const savedData = saveToLocal();
    if (!savedData.email || !savedData.message) {
        alert('Всі поля повинні бути заповнені!');
        return
    }
    console.log(savedData);
    localStorage.clear();
    formEl.elements.email.value = '';
    formEl.elements.message.value = '';
}

loadFromLocal();

formEl.addEventListener('input', saveToLocal);
formEl.addEventListener('submit', pushedSubmit)



