import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImages from './js/pixabay-api';
import imageTemplate from './js/render-functions';

const refs = {
  formEl: document.querySelector('.js-form'),
  listEl: document.querySelector('.js-list'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const query = form.elements.query.value;
  if (query.trim() === '') return;

  getImages(query).then(data => console.log(data));
  form.reset();
}
