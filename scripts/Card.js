class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;

    this._makeElements();
    this._setEventListeners();
  }

  _makeElements() {
    const elementTemplate = document.querySelector(this._templateSelector).content.querySelector('.element__container');
    this._cardElement = elementTemplate.cloneNode(true);
    
    this._cardLikeButton = this._cardElement.querySelector('.element__icon');
    this._cardRemoveButton = this._cardElement.querySelector('.element__trash');
    this._cardImage = this._cardElement.querySelector('.element__image');

    this._cardElement.querySelector('.element__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._cardElement;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', this._handleLikeClick);
    this._cardRemoveButton.addEventListener('click', this._handleRemoveClick);
    this._cardImage.addEventListener('click', () => this._handleOpenImage());
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('element__icon_active');
  }

  _handleRemoveClick(evt) {
    evt.target.closest('.element__container').remove();
  }

  _handleOpenImage() {
    openPopup(popupImageBox);
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupSubtitle.textContent = this._name;
  }

  render() {
    return this._cardElement;
  }
}

export default Card