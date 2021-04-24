const openPopupButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__text-name');
let jobInput = document.querySelector('.popup__text-job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let addButton = document.querySelector('.popup__submit-button');


function togglePopup(classList) {
  popup.classList.toggle('popup__opened');
}

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler(event) {
  evt.preventDefault();
  profileTitle.textContent = `${nameInput.value}`;
  profileSubtitle.textContent = `${jopInput.value}`;
}
popup.addEventListener('submit', formSubmitHandler);
