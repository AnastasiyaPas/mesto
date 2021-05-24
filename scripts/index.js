const formProfile = document.querySelector('#form-profile');
const buttonOpenProfilePopup = document.querySelector('.profile__button');
const popupProfile = document.querySelector('#popup-profile');
const buttonClosePopup = document.querySelector('.popup__close');
const nameInput = popupProfile.querySelector('.popup__text_form_name');
const jobInput = popupProfile.querySelector('.popup__text_form_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elementTemplate = document.querySelector('#element-template');
const elementContainer = document.querySelector('.element');

const popupAdd = document.querySelector('#popup-cards');
const titleInput = popupAdd.querySelector('.popup__text_form_title');
const linkInput = popupAdd.querySelector('.popup__text_form_link');
const saveButton = popupAdd.querySelector('.popup__submit-button');

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

  const images = document.querySelector('.element__image');
  const popupImageBox = document.querySelector('#popup-image');
  const popupImage = popupImageBox.querySelector('.popup__image');
  const popupSubtitle = popupImageBox.querySelector('.popup__subtitle');
  const closeButtonImage = popupImageBox.querySelector('.popup__close');

  const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
  enableValidation(config);
 
function openPopup(item) {
  item.classList.add('popup_opened');
  closeOverlay (item);
  closeEscape(item);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

function createNewCard (title, image) {
  const newElement = elementTemplate.content.querySelector('.element__container').cloneNode(true);
  const titleItem = newElement.querySelector('.element__title');
  const imageItem = newElement.querySelector('.element__image');
  const cardRemoveButton = newElement.querySelector('.element__trash');

  titleItem.textContent = title;
  imageItem.src = image;
  newElement.querySelector('.element__icon').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__icon_active');
  });
  cardRemoveButton.addEventListener('click', function(evt) {
    evt.target.closest('.element__container').remove();
  });

  imageItem.addEventListener('click', (item) => {
    openPopup(popupImageBox);
    popupImage.src = image;
    popupSubtitle.textContent = title;
  });

  closeButtonImage.addEventListener('click', () => {
    closePopup(popupImageBox);
  })
  
  return newElement;
}

initialCards.forEach(function(item) {
  elementContainer.prepend(createNewCard(item.name, item.link));
});

formElementAdd.addEventListener('submit', addNewCard);

function clearForm (form) {
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const errors = Array.from(form.querySelectorAll('.popup__error'));
  
  inputList.forEach(input => {
    input.value = '';
    input.classList.remove('popup__input_type_error');
  });
  errors.forEach(error => error.classList.remove('popup__error_visible'));

  form.reset();
}

function addNewCard (evt) {
  evt.preventDefault();
  elementContainer.prepend(createNewCard(titleInput.value, linkInput.value));
  clearForm (formElementAdd);
  closePopup(popupAdd);
}

function closeOverlay (item) {
  item.addEventListener('mousedown', (evt) => {
  if (evt.target === evt.currentTarget) {
    item.classList.remove('popup_opened');
    }
  });
}

function closeEscape (item) {
  document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closePopup(item);
  }
 });
}

buttonOpenProfilePopup.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

buttonClosePopup.addEventListener('click', () => {
  clearForm (formProfile);
  closePopup(popupProfile);
});

openAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closeAddButton.addEventListener('click', () => {
  clearForm (formElementAdd);
  closePopup(popupAdd);
});

function addNewProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  clearForm (formProfile);
  closePopup(popupProfile);
}

formProfile.addEventListener('submit', addNewProfile);

