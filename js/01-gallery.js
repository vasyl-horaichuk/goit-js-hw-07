import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListByClassName = document.querySelector('.gallery')

const itemMarkup = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('')

galleryListByClassName.innerHTML += itemMarkup

const onShowBigImage = event => { 
    event.preventDefault()
    
    if (event.target.nodeName !== "IMG") {
        return
    }
  
  const bigImageSrc = event.target.dataset.source
    
  const modal = basicLightbox.create(`
    <img src="${bigImageSrc}" width="800" height="600">
`)
  
  modal.show()
  
  galleryListByClassName.addEventListener('keydown', event => { 
    if (event.key === 'Escape') {
      modal.close()
        galleryListByClassName.removeEventListener('keydown', ());
    }
  })
}

galleryListByClassName.addEventListener('click', onShowBigImage)
