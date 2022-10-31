import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryByListName = document.querySelector('.gallery');

const itemMarkup = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`).join('')

galleryByListName.insertAdjacentHTML("beforebegin", itemMarkup)

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})