// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
function createImg(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
    }).join("")
};

const imgs = document.querySelector(".gallery");

const cardsImg = createImg(galleryItems);

imgs.insertAdjacentHTML('beforeend', cardsImg);
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });


