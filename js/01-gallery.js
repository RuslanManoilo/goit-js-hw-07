import { galleryItems } from './gallery-items.js';

const galleryElem = document.querySelector('.gallery');

const markup = galleryItems
.map(({preview, original, description}) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
`)
.join('');

galleryElem.innerHTML = markup;

galleryElem.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    const datasetSource = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${datasetSource}">
    `);

    instance.show();

    galleryElem.addEventListener('keydown', onEsc);

    function onEsc(event) {
        const keyEsc = event.code;
        if (keyEsc === "Escape") {
            instance.close()
        }
    }
}