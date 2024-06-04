import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImages from './js/pixabay-api';

const refs = {
  formEl: document.querySelector('.js-form'),
  listEl: document.querySelector('.js-list'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.dir(e.target);
  //  console.log(e.target);
}

getImages('cat').then(data => console.log(data));
getImages('dog').then(data => console.log(data));
