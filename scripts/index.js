let formElement = document.querySelector('.popup__form');
let openPopupButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close');
let nameInput = popup.querySelector('.popup__text_form_name');
let jobInput = popup.querySelector('.popup__text_form_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


function openPopup(classList) {
  popup.classList.add('popup__opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup(classList) {
  popup.classList.remove('popup__opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);