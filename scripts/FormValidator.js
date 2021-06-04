class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._button = this._form.querySelector(this._config.submitButtonSelector);
  }

  _setEventListeners(config) {
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.errorClass);
  }
  
  _showInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.disabled = true;
      this._button.classList.add(this._config.inactiveButtonClass);
    } else {
      this._button.disabled = false;
      this._button.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInput() {
    return this._inputs.some(input => !input.validity.valid);
  }

  enableValidation() {
    this._form.addEventListener('submit', e => e.preventDefault());
    this._setEventListeners(this._form, this._config);
  }
}

export default FormValidator

