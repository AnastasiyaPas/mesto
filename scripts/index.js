const formElement = document.querySelector('.popup__form');
const openPopupButton = document.querySelector('.profile__button');
const popup = document.querySelector('#popup-profile');
const closePopupButton = popup.querySelector('.popup__close');
const nameInput = popup.querySelector('.popup__text_form_name');
const jobInput = popup.querySelector('.popup__text_form_job');
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

function openPopup(item) {
  item.classList.add('popup__opened');
}
  
function closePopup(item) {
  item.classList.remove('popup__opened');
}

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
  });

  imageItem.addEventListener('click', (item) => {
    openPopup(popupImageBox);
    popupImage.src = image;
    popupSubtitle.textContent = title;
  });

  closeButtonImage.addEventListener('click', () => {
    closePopup(popupImageBox);
  })

  elementContainer.prepend(newElement);
}

initialCards.forEach(function(item) {
  title = item.name;
  image = item.link;
  newCard (title, image);
});

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  title = titleInput.value;
  image = linkInput.value;
  newCard (title, image);
  closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

openPopupButton.addEventListener('click', () => {
  openPopup(popup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});
closePopupButton.addEventListener('click', () => {
  closePopup(popup);
});

openAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
closeAddButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popup);
}

formElement.addEventListener('submit', formSubmitHandler);
