import { galleryItems } from './gallery-items.js';


const galleryElem = document.querySelector('.gallery');

const markup = galleryItems
.map(({preview, original, description}) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`)
.join('');

galleryElem.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    }
);