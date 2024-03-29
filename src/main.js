import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPhoto } from './js/pixabay-api.js';
import { imagesTemplate } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query === '') {
     return iziToast.warning({message: "Please try again! Write something.", position: "topRight", color: "red"})
  }

  loader.classList.remove('is-hidden');

  getPhoto(query)
    .then(data => {
      renderImages(data.hits);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}

function renderImages(images) {
  gallery.innerHTML = imagesTemplate(images);
}