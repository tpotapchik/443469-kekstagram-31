import {isEscapeKey, onEscKeyDown} from './util.js';
import {clearComments, renderComments} from './comments.js';

const popupEl = document.querySelector('.big-picture');
const commentLoaderEl = document.querySelector('.comments-loader');
const commentInputEl = document.querySelector('.social__footer-text');
const bigImageEl = document.querySelector('.big-picture');
const closeBtnEl = document.querySelector('.big-picture__cancel');

const fillPopup = ({url, description, likes, comments}) => {
  const imgEl = bigImageEl.querySelector('.big-picture__img img');
  imgEl.src = url;
  imgEl.alt = description;
  bigImageEl.querySelector('.social__caption').textContent = description;
  bigImageEl.querySelector('.likes-count').textContent = likes;

  renderComments(comments);
};

closeBtnEl.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
});

const onPopupEscKeydown = (evt) => onEscKeyDown(evt, closePopup);

const openPopup = (photo) => {
  fillPopup(photo);

  popupEl.classList.remove('hidden');

  commentInputEl.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });

  document.addEventListener('keydown', onPopupEscKeydown);
};

//function declaration to call it anywhere
function closePopup() {
  popupEl.classList.add('hidden');
  commentLoaderEl.classList.remove('hidden');
  clearComments();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

export {openPopup};
