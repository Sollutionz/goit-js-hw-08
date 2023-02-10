// Add imports above this line
import { galleryItems } from './gallery-items'; 
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery')

function createGallery(elements) {
    return elements.map((elem) =>
        `<div class="gallery__item"> 
         <a class="gallery__link" href="${elem.original}">
           <img class="gallery__image" src="${elem.preview}"
             data-sourse="${elem.original}"
             alt="${elem.description}"/>
         </a>
       </div>`)
        .join("")
}

gallery.innerHTML = createGallery(galleryItems)


let galleryBox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryBox.on("show.simplelightbox", function () {});

console.log(galleryItems);
console.log(galleryItems);
