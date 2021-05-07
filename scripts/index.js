let formElement = document.querySelector('.popup__form');
let openPopupButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close');
let nameInput = popup.querySelector('.popup__text_form_name');
let jobInput = popup.querySelector('.popup__text_form_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const elementTemplate = document.querySelector('#element-template');
const elementContainer = document.querySelector('.element');

const popupAdd = document.querySelector('#popup-images');
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

  

function newCard (title, image) {
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
  })
  elementContainer.prepend(newElement);
}

initialCards.forEach(function(item) {
  title = item.name;
  image = item.link;
  newCard (title, image);
  console.log(123);
});

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  title = titleInput.value;
  image = linkInput.value;
  newCard (title, image);
  closeAddPopup();
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

function openPopup(classList) {
  popup.classList.add('popup__opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup(classList) {
  popup.classList.remove('popup__opened');
}

function openAddPopup() {
  popupAdd.classList.add('popup__opened');
}

function closeAddPopup() {
  popupAdd.classList.remove('popup__opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

openAddButton.addEventListener('click', openAddPopup);
closeAddButton.addEventListener('click', closeAddPopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
