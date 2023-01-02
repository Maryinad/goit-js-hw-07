import { galleryItems } from "./gallery-items.js";
// Change code below this line

//   /* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>; */

const galleryContainerEl = document.querySelector(".gallery");

const createMarkup = (galleryItems) => {
  return galleryItems
    .map((galleryItem) => {
      const { preview, original, description } = galleryItem;
      return `<div class="gallery__item">
        <a class="gallery__link " href="${original}" >
         <img
     class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
 </div>`;
    })
    .join("");
};
createMarkup(galleryItems);

const showMarkup = galleryContainerEl.insertAdjacentHTML(
  "beforeend",
  createMarkup(galleryItems)
);

// const createMarkup = (galleryItems) => {
//   const markup = galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//          <a class="gallery__link" href="large-image.jpg">
//          <img
//       class="gallery__image"
//      src="${preview}"
//      data-source="${original}"
//       alt="${description}"
//      />
//   </a>
//  </div>`;
//     })
//     .join("");
//   return markup;
// };

// galleryContainerEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryContainerEl.addEventListener("click", onClickGalleryItem);

function onClickGalleryItem(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const bannerURL = event.target.dataset.source;
  console.log(bannerURL);

  const instance = basicLightbox.create(`
    <img src="${bannerURL}" width="800" height="600" class="instance">
`);

  instance.show();

  window.addEventListener("keydown", closeOriginalPhoto);

  function closeOriginalPhoto(event) {
    if (event.code === "Escape") {
      //   console.log("close");
      instance.close();
      window.removeEventListener("keydown", closeOriginalPhoto);
    }

    console.log(event);
  }
}
