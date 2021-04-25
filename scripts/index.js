let openPopupButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
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

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = `${nameInput.value}`;
  profileSubtitle.textContent = `${jobInput.value}`;
  console.log(123);
}
formSubmitHandler();

addButton.addEventListener('submit', formSubmitHandler);
