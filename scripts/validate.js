
function hideInputError(errorElement, input, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
}

function showInputError(errorElement, input, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(errorClass);
}

function checkInputValidity(form, input, {inputErrorClass, errorClass}) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    hideInputError(errorElement, input, inputErrorClass, errorClass);
  } else {
    showInputError(errorElement, input, inputErrorClass, errorClass);
  }
}

function hasInvalidInput(inputs) {
  return inputs.some(input => !input.validity.valid);
}

function toggleButtonState(button, inputs, buttonClass) {
   if (hasInvalidInput(inputs)) {
     button.disabled = true;
     button.classList.add(buttonClass);
   } else {
    button.disabled = false;
    button.classList.remove(buttonClass);
   }
 }

function setEventListeners(form, {inputSelector, submitButtonSelector, inactiveButtonClass, ...restConfig}) {  
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  toggleButtonState(button, inputs, inactiveButtonClass);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, restConfig);
      toggleButtonState(button, inputs, inactiveButtonClass);
    });
  });
  
}

function enableValidation({formSelector, ...restConfig}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', e => e.preventDefault());
    setEventListeners(form, restConfig);
  });
}