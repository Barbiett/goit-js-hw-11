import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
function imageTemplate(data) {
  return `<li class="gallery-item">
	<a class="gallery-link" href="${data.largeImageURL}">
		<img
            src="${data.webformatURL}"
            alt="${data.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${data.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${data.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${data.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${data.downloads}</li>
     </ul>
	</a>
</li>`;
}
 
   export function imagesTemplate(arr) {
  if (arr.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      color: 'red',
      position: 'topRight',
    });
    return;
  }
  
  const galleryHTML = arr.map(imageTemplate).join('');
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
  
  return galleryHTML;
}