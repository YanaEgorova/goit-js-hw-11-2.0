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

// const lightbox = new SimpleLightbox(refs.listEl);
// console.log(lightbox);

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const query = form.elements.query.value;
  if (query.trim() === '') return;

  getImages(query).then(data => renderImages(data.hits));
  form.reset();
}

function renderImages(images) {
  console.log(images);
  const markup = images.map(imageTemplate).join('');

  refs.listEl.innerHTML = markup;
  //   const markup = imageTemplate(image);
  //   refs.listEl.innerHTML = markup;
}
