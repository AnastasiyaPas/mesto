import FormValidator from './FormValidator.js';
import Card from './Card.js';

const formProfile = document.querySelector('#form-profile');
const buttonOpenProfilePopup = document.querySelector('.profile__button');
const popupProfile = document.querySelector('#popup-profile');
const buttonCloseProfilePopup = popupProfile.querySelector('.popup__close');
const nameInput = popupProfile.querySelector('.popup__text_form_name');
const jobInput = popupProfile.querySelector('.popup__text_form_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elementContainer = document.querySelector('.element');
const popupList = Array.from(document.querySelectorAll('.popup'));

const popupAdd = document.querySelector('#popup-cards');
const titleInput = popupAdd.querySelector('.popup__text_form_title');
const linkInput = popupAdd.querySelector('.popup__text_form_link');

const openAddButton = document.querySelector('.profile__add-button');
const closeAddButton = popupAdd.querySelector('.popup__close');

const formElementAdd = document.querySelector('#form-popup');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }];

  export const popupImageBox = document.querySelector('#popup-image');
  export const popupImage = popupImageBox.querySelector('.popup__image');
  export const popupSubtitle = popupImageBox.querySelector('.popup__subtitle');
  const closeButtonImage = popupImageBox.querySelector('.popup__close');

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
 
export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscape);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscape);
}

closeButtonImage.addEventListener('click', () => {
  closePopup(popupImageBox);
})

function closeOverlay (popupList) {
  popupList.forEach(popup => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
      closePopup(popup);
      }
    });
  });
}

closeOverlay (popupList);

function closeEscape (evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, formElementAdd);
cardFormValidator.enableValidation();

buttonOpenProfilePopup.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  profileFormValidator.enableValidation();
});

buttonCloseProfilePopup.addEventListener('click', () => {
  profileFormValidator.clearForm();
  closePopup(popupProfile);
});

openAddButton.addEventListener('click', () => {
  cardFormValidator.clearForm();
  openPopup(popupAdd);
});

closeAddButton.addEventListener('click', () => {
  cardFormValidator.clearForm();
  closePopup(popupAdd);
});

function addNewProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  profileFormValidator.clearForm();
  closePopup(popupProfile);
}

formProfile.addEventListener('submit', addNewProfile);

initialCards.forEach(function(item) {
  const card = new Card (item.name, item.link, '#element-template');
  const cardElement = card.render();

  document.querySelector('.element').prepend(cardElement);
});

function addNewCard (evt) {
  evt.preventDefault();
  const newCard = new Card(titleInput.value, linkInput.value, '#element-template');
  const newCardElement = newCard.render();
  elementContainer.prepend(newCardElement);
  cardFormValidator.clearForm();
  closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', addNewCard);