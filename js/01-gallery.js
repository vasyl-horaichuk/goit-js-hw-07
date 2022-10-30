import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListByClassName = document.querySelector('.gallery');

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
</div>`).join('');

galleryListByClassName.innerHTML += itemMarkup;

const onShowBigImage = event => { 
    event.preventDefault()
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
}

galleryListByClassName.addEventListener('click', onShowBigImage)
console.log(galleryListByClassName);






// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у 
// проект посилання на мініфіковані(.min) файли бібліотеки.
// // Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// // Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна 
// із зображенням з прикладів бібліотеки basicLightbox.
